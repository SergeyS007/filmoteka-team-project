!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequire4383;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequire4383=n);var o=n("gRpj2"),i=n("4yfm1"),r=n("fSQZW"),g=n("5OHSn"),l=n("4TiSG"),d=n("aAR71");let P=null,s=null,c=null,I=null,u=null,A=null,D=null,E=!1;function M(){document.querySelector(".loader--critical").style.display="none",document.body.classList.remove("body-clip-overflow")}function O(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target,a=t.dataset.pagination;let n=window.innerWidth<=767?230:219;switch(window.scroll(0,n),a){case"next":i.PaginationAPI.changePageByOne(!0);break;case"previous":i.PaginationAPI.changePageByOne(!1);break;case"number":const e=parseInt(t.textContent);if(e===i.PaginationAPI.currentPage)return;i.PaginationAPI.updateCurrentPage(e);break;default:return}v(),i.PaginationAPI.renderPagination()}function v(){if(I=g.LDStorageAPI.getMoviesByPage(i.PaginationAPI.currentPage),!I.length){if(i.PaginationAPI.changePageByOne(!1),i.PaginationAPI.currentPage<1)return E?(E=!1,i.PaginationAPI.currentPage=1,g.LDStorageAPI.updateActiveStorage(P),D.value="",void v()):(D.value="",i.PaginationAPI.updateCurrentPage(1),i.PaginationAPI.totalPages=0,L(),void s.renderMoviesCards(I));v()}A.hasAttribute("style")||T(),i.PaginationAPI.totalPages=g.LDStorageAPI.getTotalPages(),s.renderMoviesCards(I)}function S(e){const t=e.target;if("BUTTON"!==t.nodeName)return;D.value="",g.LDStorageAPI.lastSearchRequest=null,E=!1;const a="library-watched"===t.id?g.LDStorageAPI.MOVIE_INFO.WATCHED:g.LDStorageAPI.MOVIE_INFO.QUEUED;if(a===P)return;e.currentTarget.querySelector(`button:not(#${t.id})`).classList.remove("btn-active"),t.classList.add("btn-active"),P=a,i.PaginationAPI.currentPage=1,g.LDStorageAPI.updateActiveStorage(P),I=g.LDStorageAPI.getMoviesByPage(i.PaginationAPI.currentPage),i.PaginationAPI.totalPages=g.LDStorageAPI.getTotalPages(),i.PaginationAPI.totalPages?(r.NotificationAPI.addNotification(`Showing your ${P} movies`,!1,3e3),T()):L(),s.renderMoviesCards(I),i.PaginationAPI.renderPagination()}function f(e){e.preventDefault();const t=e.currentTarget.elements.query.value;if(t===g.LDStorageAPI.lastSearchRequest&&E)return;if(""===t){if(!E)return;return g.LDStorageAPI.lastSearchRequest="",E=!1,g.LDStorageAPI.updateActiveStorage(P),i.PaginationAPI.totalPages=g.LDStorageAPI.getTotalPages(),i.PaginationAPI.updateCurrentPage(1),v(),void i.PaginationAPI.renderPagination()}const a=g.LDStorageAPI.searchMoviesByName(t,P);a.length?(E=!0,I=a,r.NotificationAPI.addNotification(`Here are the movies matching '${t}' request`,!1,3e3),g.LDStorageAPI.updateActiveStorage(g.LDStorageAPI.MOVIE_INFO.SEARCHED),i.PaginationAPI.totalPages=g.LDStorageAPI.getTotalPages(),i.PaginationAPI.updateCurrentPage(1),s.renderMoviesCards(I),i.PaginationAPI.renderPagination()):r.NotificationAPI.addNotification("Oops, there are no results matching your search request...",!0,3e3)}function y(e){c.onGalleryCardClicked(+e)}function _(e){const t=P===g.LDStorageAPI.MOVIE_INFO.WATCHED?d.MovieModalHandler.MOVIE_ACTIONS.REMOVED_FROM_WATCHED:d.MovieModalHandler.MOVIE_ACTIONS.REMOVED_FROM_QUEUED;g.LDStorageAPI.removeFromLocalStorage(+e,P),m(t)}function m(e){let t=!1;e!==d.MovieModalHandler.MOVIE_ACTIONS.REMOVED_FROM_WATCHED&&e!==d.MovieModalHandler.MOVIE_ACTIONS.ADDED_TO_WATCHED||P!==g.LDStorageAPI.MOVIE_INFO.WATCHED||(t=!0),e!==d.MovieModalHandler.MOVIE_ACTIONS.REMOVED_FROM_QUEUED&&e!==d.MovieModalHandler.MOVIE_ACTIONS.ADDED_TO_QUEUED||P!==g.LDStorageAPI.MOVIE_INFO.QUEUED||(t=!0),e!==d.MovieModalHandler.MOVIE_ACTIONS.REMOVED_FROM_QUEUED&&e!==d.MovieModalHandler.MOVIE_ACTIONS.ADDED_TO_QUEUED&&e!==d.MovieModalHandler.MOVIE_ACTIONS.REMOVED_FROM_WATCHED&&e!==d.MovieModalHandler.MOVIE_ACTIONS.ADDED_TO_WATCHED||!E||(g.LDStorageAPI.searchMoviesByName(g.LDStorageAPI.lastSearchRequest,P),t=!0),t&&(v(),i.PaginationAPI.renderPagination())}function T(){A.setAttribute("style","display: none;"),D.removeAttribute("disabled")}function L(){A.removeAttribute("style"),D.setAttribute("disabled","true")}(async()=>{try{g.LDStorageAPI.init(!0),r.NotificationAPI.init("body",178),await l.BackendConfigStorage.init(),g.LDStorageAPI.updateActiveStorage(g.LDStorageAPI.MOVIE_INFO.WATCHED),P=g.LDStorageAPI.MOVIE_INFO.WATCHED,I=g.LDStorageAPI.getMoviesByPage(i.PaginationAPI.currentPage),i.PaginationAPI.totalPages=g.LDStorageAPI.getTotalPages(),s=new(0,o.GalleryAPI)("#movies-wrapper",!0,y,_),(null==I?void 0:I.length)?s.addOnCriticalImagesLoadedCallback(M):document.querySelector(".loader--critical").style.display="none",s.renderMoviesCards(I),i.PaginationAPI.renderPagination(),c=new(0,d.MovieModalHandler)(s,d.MovieModalHandler.MODE.LIBRARY_WATCHED,m),A=document.getElementById("library-no-movies"),D=document.getElementById("library-search-input"),i.PaginationAPI.paginationWrapperDiv.addEventListener("click",O);document.querySelector(".header-library__buttons").addEventListener("click",S),u=document.getElementById("library-movies-search-form"),u.addEventListener("submit",f);new ResizeObserver(i.PaginationAPI.onWindowResize).observe(document.body),i.PaginationAPI.totalPages?(r.NotificationAPI.addNotification("Showing your watched movies",!1,3e3),T()):L()}catch(e){console.log(e.message),document.querySelector(".loader--critical").style.display="none",r.NotificationAPI.addNotification("Something went wrong! Here is the log: "+e.message,!0)}})(),n("4JddF"),n("geia1"),n("92927")}();
//# sourceMappingURL=library.011b18fd.js.map
