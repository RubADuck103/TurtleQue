const postBtn = document.getElementById('post-btn');
const postsContainer = document.querySelector('.posts');

postBtn.addEventListener('click', () => {
  const textarea = document.querySelector('.new-post textarea');
  const text = textarea.value.trim();
  if (!text) {
    alert('Write something first!');
    return;
  }

  const post = document.createElement('div');
  post.className = 'post';
  post.textContent = text;

  postsContainer.prepend(post);
  textarea.value = '';
});
