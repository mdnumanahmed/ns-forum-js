const loadPosts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  const posts = data.posts;
  showAllPosts(posts);
};

const showAllPosts = (posts) => {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    const {
      category,
      image,
      title,
      author,
      comment_count,
      view_count,
      isActive,
      description,
      posted_time,
    } = post;
    postsContainer.innerHTML += `
      <div
        class="single-card flex flex-col lg:flex-row gap-2 p-3 lg:p-10 rounded-2xl bg-[#797DFC1A]"
    >
        <div class="avatar ${isActive ? "online" : "offline"}">
        <div class="w-full lg:w-36 rounded-full">
            <img
            src="${image}"
            />
        </div>
        </div>
        <div class="p-4 space-y-3 grow">
        <div class="flex gap-4">
            <h4 class="mulish text-sm text-[#12132DCC] font-bold">
            # ${category}
            </h4>
            <h4 class="mulish text-sm text-[#12132DCC] font-bold">
            Author: ${author?.name}
            </h4>
        </div>
        <h3 class="mulish text-xl font-bold text-[#12132D]">
            ${title}
        </h3>
        <p class="text-[#12132D99] text-base">
            ${description}
        </p>
        <hr />
        <div class="flex justify-between">
            <div class="text-[#12132DCC] text-base flex gap-10">
            <p class="flex items-center gap-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-square-text"
                viewBox="0 0 16 16"
                >
                <path
                    d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                />
                <path
                    d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
                />
                </svg>
                <span> ${comment_count} </span>
            </p>
            <p class="flex items-center gap-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye"
                viewBox="0 0 16 16"
                >
                <path
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                />
                <path
                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                />
                </svg>
                <span> ${view_count} </span>
            </p>
            <p class="flex items-center gap-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clock"
                viewBox="0 0 16 16"
                >
                <path
                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
                />
                <path
                    d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                />
                </svg>
                <span> ${posted_time} </span>
            </p>
            </div>
            <div
            class="bg-[#10B981] rounded-full w-8 h-8 p-1 text-center"
            >
            <button id="show-marked" onclick="showMarkAsRead('${post.id}')">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-open text-white"
                viewBox="0 0 16 16"
                >
                <path
                    d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z"
                />
                </svg>
            </button>
            </div>
        </div>
        </div>
    </div>
      `;
  });
};

const showMarkAsRead = async (id) => {
  const markReadCount = document.getElementById("mark-read-count");
  markReadCount.innerText = Number(markReadCount.innerText) + 1;
  const displayReadContent = document.getElementById("display-read-content");
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/post/${id}`
  );
  const data = await res.json();
  const { title, view_count } = data;
  console.log(data);
  displayReadContent.innerHTML += `
    <div class="flex justify-between p-4 rounded-xl bg-white">
        <h3 class="mulish font-semibold text-base">
            ${title ? title : "Title not found!"}
        </h3>
        <p class="flex items-center gap-4">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eye"
            viewBox="0 0 16 16"
            >
            <path
                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
            />
            <path
                d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
            />
            </svg>
            <span> ${view_count ? view_count : 0} </span>
        </p>
        </div>
    `;
};

const loadLatestPosts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  const posts = data;
  displayLatestPosts(posts);
};

const displayLatestPosts = (posts) => {
  const postsContainer = document.getElementById("latest-post-container");
  posts.forEach((post) => {
    const { cover_image, title, profile_image, description, author } = post;
    postsContainer.innerHTML += `
      <div class="border-2 rounded-2xl p-6 space-y-4 shadow-md">
        <img src="${cover_image}" alt="" class="rounded-2xl" />
        <div class="space-y-3">
            <p class="mulish text-base text-[#12132D99]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-calendar2-date inline mr-3"
                viewBox="0 0 16 16"
            >
                <path
                d="M6.445 12.688V7.354h-.633A13 13 0 0 0 4.5 8.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"
                />
                <path
                d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
                />
                <path
                d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"
                />
            </svg>
            ${author?.posted_date ? author.posted_date : "Date not available"}
            </p>
            <h3 class="text-lg font-extrabold">
            ${title ? title : "Title not available"}
            </h3>
            <p class="text-base mulish text-[#12132D99]">
            ${description ? description : "Description not available"}
            </p>
            <div class="divider"></div>
            <div class="flex items-center gap-4">
            <div class="avatar">
                <div
                class="ring-primary ring-offset-base-100 w-11 rounded-full ring ring-offset-2"
                >
                <img
                    src="${profile_image ? profile_image : "Image not found"}"
                />
                </div>
            </div>
            <div>
                <h4 class="mulish text-base font-bold">${
                  author?.name ? author?.name : "Name not found"
                }</h4>
                <p class="text-sm mulish text-[#12132D99]">${
                  author?.designation ? author.designation : "Unknown"
                }</p>
            </div>
            </div>
        </div>
        </div>
        `;
  });
};

// Function to search by category using onclick in search button
const searchByCategory = async () => {
  const categoryName = document.getElementById("search-input-text").value;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`
  );
  const data = await res.json();
  showAllPosts(data.posts);
};

// addEventListener() to search by category using by Enter key
document
  .getElementById("search-input-text")
  .addEventListener("keypress", async function (e) {
    const enterKey = e.key;
    if (enterKey === "Enter") {
      const categoryName = document.getElementById("search-input-text").value;
      const res = await fetch(
        `https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`
      );
      const data = await res.json();
      showAllPosts(data.posts);
    }
  });

loadPosts();
loadLatestPosts();
