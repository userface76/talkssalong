const toggle=document.querySelector('.mobile-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>links.classList.toggle('open'));}

async function loadPosts(targetId, source){
  const target=document.getElementById(targetId); if(!target) return;
  try{
    const res=await fetch(source); const items=await res.json();
    target.innerHTML=items.map(item=>`<article class="post">
      <img src="${item.image}" alt="${item.title}">
      <div class="post-body"><small>${item.category}</small><h3>${item.title}</h3><p>${item.summary}</p></div>
    </article>`).join('');
  }catch(e){target.innerHTML='<p>게시물을 불러오지 못했습니다.</p>';}
}
loadPosts('home-posts','/data/posts.json');
loadPosts('panel-posts','/data/panels.json');
