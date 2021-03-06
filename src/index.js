import "./pages/index/index.css";

import { API_KEY } from "./js/constants/api-key.js";
import { SEARCH_URL, NEWS_START_QUANTITY, THREE_NEWS } from "./js/constants/constants.js";
import { fixDate } from "./js/utils/utils.js";
import { SearchInput } from "./js/components/SearchInput.js";
import { NewsCard } from "./js/components/NewsCard.js";
import { CardList } from "./js/components/CardList.js";
import { NewsApi } from "./js/modules/NewsApi.js";
import { DataStorage } from "./js/modules/DataStorage.js";
import { ShowMoreButton } from "./js/components/ShowMoreButton.js";
import { Block } from "./js/components/Block.js";

(function () {
  const input = document.querySelector(".search__input");
  const searchButton = document.querySelector(".search__button");
  let newsCounter = NEWS_START_QUANTITY;

  const preloader = new Block (document.querySelector(".preloader"), "root__hide");
  const requestError = new Block (document.querySelector(".request-error"), "root__hide");
  const newsBlock = new Block (document.querySelector(".news"), "root__hide");
  const notFound = new Block (document.querySelector(".not-found"), "root__hide");
  const searchForm = new SearchInput(document.forms.search, searchFormSubmit);
  const newsApi = new NewsApi(SEARCH_URL, API_KEY, openRequestError, saveNewsInTitles);
  const newsCardList = new CardList(document.querySelector(".news__list"));
  const dataStorage = new DataStorage();
  const showMoreButton = new ShowMoreButton(
    document.querySelector(".news__show-more"),
    showMoreButtonClick,
    "news__show-more_is-closed"
  );

function handleSearchFormElements(boolean) {
  input.disabled = boolean;
  searchButton.disabled = boolean;
}

  function openRequestError() {
    preloader.hide();
    handleSearchFormElements(false);
    requestError.open();
  }

  function renderNewsCards(arr) {
    arr.forEach((item) => {
      const newsCard = new NewsCard(
        fixDate,
        item.url,
        item.urlToImage,
        item.publishedAt,
        item.title,
        item.description,
        item.source.name
      );
      newsCardList.addCards(newsCard.addData());
    });
  }

  function openNewsBlock() {
    newsBlock.open();
  }

  function saveNewsInTitles(item) {
    dataStorage.setItem("newsInTitles", item);
  }

  function handleShowMoreButton(item) {
    if (item === newsCardList.container.children.length) {
      showMoreButton.hideButton();
    }
  }

  function searchFormSubmit() {
    event.preventDefault();
    if (document.forms.search.checkValidity()) {
      if (!(newsCardList.container.children.length === 0)) {
        dataStorage.clear();
        newsBlock.hide();
        showMoreButton.openButton();
        newsCardList.removeCards();
      }
      notFound.hide();
      requestError.hide();
      preloader.open();
      handleSearchFormElements(true);
      newsApi
        .getNews(input.value)
        .then((result) => {
          dataStorage.setItem("news", result.articles);
          dataStorage.setItem("input", input.value);
          dataStorage.setItem("totalResults", result.totalResults);
          preloader.hide();
          handleSearchFormElements(false);
          if (!(result.articles.length === 0)) {
            const articles = dataStorage.getItem("news");
            const arr = articles.slice(0, NEWS_START_QUANTITY);
            newsCounter = NEWS_START_QUANTITY;
            dataStorage.setItem("newsList", arr);
            renderNewsCards(arr);
            handleShowMoreButton(articles.length);
            openNewsBlock();
            newsApi.getNewsInTitles(input.value);
          } else {
            notFound.open();
          }
        })
        .catch((err) => {
          console.log(err);
          openRequestError();
          handleSearchFormElements(false);
        });
    } else {
      console.log("Нужно ввести ключевое слово");
    }
  }

  function showMoreNews(arr) {
    if (newsCounter < arr.length - (arr.length % THREE_NEWS)) {
      const output = [arr[newsCounter], arr[newsCounter + 1], arr[newsCounter + 2]];
      newsCounter = newsCounter + THREE_NEWS;
      return output;
    }

    if (arr.length % THREE_NEWS == 2) {
      return [arr[newsCounter], arr[newsCounter + 1]];
    }

    if (arr.length % THREE_NEWS == 1) {
      return [arr[newsCounter]];
    }
  }

  function showMoreButtonClick() {
    const articles = dataStorage.getItem("news");
    let arr = showMoreNews(articles);

    const newslist = dataStorage.getItem("newsList");

    arr.forEach((item) => {
      const newsCard = new NewsCard(
        fixDate,
        item.url,
        item.urlToImage,
        item.publishedAt,
        item.title,
        item.description,
        item.source.name
      );
      newsCardList.addCards(newsCard.addData());
      return newslist.push(item);
    });

    handleShowMoreButton(articles.length);
    dataStorage.setItem("newsList", newslist);
  }

  function renderLastSearchResults() {
    if (dataStorage.checkLocalStorage()) {
      const searchInput = dataStorage.getItem("input");
      input.value = searchInput;

      const newslist = dataStorage.getItem("newsList");
      renderNewsCards(newslist);

      openNewsBlock();

      const articles = dataStorage.getItem("news");
      handleShowMoreButton(articles.length);
    }
  }

  renderLastSearchResults();
  searchForm.setValidateListener();
  searchForm.setSumbitListener();
  showMoreButton.setClickListener();
})();
