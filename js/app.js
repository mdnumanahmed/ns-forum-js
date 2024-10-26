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
  posts.forEach((post) => {
    console.log(post);
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
        <div class="avatar online">
        <div class="w-full lg:w-24 rounded-full">
            <img
            src="${image}"
            />
        </div>
        </div>
        <div class="p-4 space-y-3">
        <div class="flex gap-4">
            <h4 class="mulish text-sm text-[#12132DCC] font-bold">
            # ${category}
            </h4>
            <h4 class="mulish text-sm text-[#12132DCC] font-bold">
            Author: ${author}
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
            <button>
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

loadPosts();
