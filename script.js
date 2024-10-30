const phoneMenu = document.getElementById("menu-phone");
const menuBtn = document.getElementById("menu-phone-button");
let isOpen = false;

menuBtn.addEventListener('click', () => {
	phoneMenu.classList.toggle("menu-visible");
	if (isOpen) {
		menuBtn.style.transform = "rotate(0deg)";
		menuBtn.querySelector("img").src = "imgs/menu.svg";
	}
	else {
		menuBtn.style.transform = "rotate(720deg)";
		menuBtn.querySelector("img").src = "imgs/close-x.svg";

	}

	isOpen = !isOpen;
});

const menuItemsDT = document.querySelectorAll(".menu-item-desktop");

menuItemsDT.forEach(element => {
	element.addEventListener('click', () => {
		menuItemsDT.forEach(element => element.classList.remove("menu-selected"));
		element.classList.add("menu-selected");
	});
});

class RelativeTime extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.render()

		setInterval(() => {
			this.render()
		}, 1000)
	}

	static get observedAttributes() {
		return['time']
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.render();
	  }

	render() {
		const time = new Date(this.getAttribute('time')).getTime();
		const now = Date.now();

		const diff = now - time;
		const seconds = Math.floor(diff / 1000)
		const minutes = Math.floor(diff / (1000 * 60));
		const hours = Math.floor(minutes / 60);
		const days = Math.floor(hours / 24);
		const weeks = Math.floor(days / 7);
		const months = Math.floor(days / 30);
		const years = Math.floor(months / 12);

		let aux = '...';

		if (years >= 1)
			aux = `Hace ${years} año${years > 1 ? 's' : ''}`
		else if (months >= 1)
			aux = `Hace ${months} mes${months > 1 ? 'es' : ''}`
		else if (weeks >= 1)
			aux = `Hace ${weeks} semana${weeks > 1 ? 's' : ''}`
		else if (days >= 1)
			aux = `Hace ${days} día${days > 1 ? 's' : ''}`
		else if (hours >= 1)
			aux = `Hace ${hours} hora${hours > 1 ? 's' : ''}`
		else if (minutes >= 1)
			aux = `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`
		else if (seconds >= 1)
			aux = `Hace ${seconds} segundo${seconds > 1 ? 's' : ''}`
		this.textContent = aux;


	}
}
customElements.define('relative-time', RelativeTime);

const articles = [
	{
	  "id": 1,
	  "image": "imgs/article-tax.jpg",
	  "title": "Climate Activists Push for Carbon Tax With Measure GG, But Critics Warn it Could Backfire",
	  "description": "Grassroots activists rally for carbon tax reform in Berkeley, facing pushback from political and economic circles.",
	  "date": "Wed Oct 18 2024 14:12:41 GMT+0200",
	  "category": "Earth"
	},
	{
	  "id": 2,
	  "image": "imgs/article-musk.webp",
	  "title": "Musk’s empire risks being targeted by EU for potential X fines",
	  "description": "EU regulators consider extending fines across Musk’s various ventures, raising debate on multinational oversight.",
	  "date": "Tue Oct 15 2024 10:42:23 GMT+0200",
	  "category": "Business"
	},
	{
	  "id": 3,
	  "image": "imgs/omoda.webp",
	  "title": "Omoda E5 in Noble trim - pictures",
	  "description": "Images showcase the sleek electric SUV Omoda E5 on UK roads, highlighting its unique style and features.",
	  "date": "Mon Oct 14 2024 08:15:35 GMT+0200",
	  "category": "Travel"
	},
	{
	  "id": 4,
	  "image": "imgs/trump-harris.webp",
	  "title": "Harris prepares for closing argument as Trump defends New York rally 'love fest'",
	  "description": "Kamala Harris wraps up as Trump responds to critics of his rally style in New York.",
	  "date": "Sun Oct 13 2024 16:54:10 GMT+0200",
	  "category": "US Election"
	},
	{
	  "id": 5,
	  "image": "imgs/doner.webp",
	  "title": "The döner kebab feud that has the world talking",
	  "description": "A passionate debate on authenticity divides döner kebab purists and modern twist enthusiasts globally.",
	  "date": "Sat Oct 12 2024 12:00:45 GMT+0200",
	  "category": "Culture"
	},
	{
	  "id": 6,
	  "image": "imgs/gaza.webp",
	  "title": "At least 93 killed and missing in Israeli strike on Gaza, health ministry says",
	  "description": "Reports from Gaza reveal extensive casualties following Israeli airstrikes, drawing global attention.",
	  "date": "Fri Oct 11 2024 09:40:23 GMT+0200",
	  "category": "News"
	},
	{
	  "id": 7,
	  "image": "imgs/chopin.webp",
	  "title": "Lost Chopin waltz unearthed after almost 200 years",
	  "description": "Historians are delighted by the discovery of a long-lost waltz by Chopin, sparking musical excitement.",
	  "date": "Thu Oct 10 2024 17:22:11 GMT+0200",
	  "category": "Arts"
	},
	{
	  "id": 8,
	  "image": "imgs/trees.webp",
	  "title": "Alarm call as world's trees slide towards extinction",
	  "description": "A recent study shows the world's trees face unprecedented extinction risk, prompting urgent calls for action.",
	  "date": "Wed Oct 09 2024 14:07:52 GMT+0200",
	  "category": "Earth"
	},
	{
	  "id": 9,
	  "image": "imgs/mexico.webp",
	  "title": "PhD student finds lost city in Mexico jungle by accident",
	  "description": "An unexpected discovery by a PhD student unveils remnants of an ancient city hidden deep in the jungle.",
	  "date": "Tue Oct 08 2024 10:50:16 GMT+0200",
	  "category": "Arts"
	}
  ];

  const getId = () => {
	const searchParams = new URLSearchParams(location.search.slice(1));
	return Number(searchParams.get('id'));
  }

  class CustomArticle extends HTMLElement {
	constructor() {
	  super();
	  this.articleId = getId();
	}
	connectedCallback() {
	  this.render();
	}
  
	render() {
	  const article = articles.find(article => article.id === this.articleId)
	  if (article) {
		const h1 = this.querySelector('h1');
		h1.textContent = article.title;
  
		const img = this.querySelector('img');
		img.src = article.image;

		const time = this.querySelector('relative-time');
		time.setAttribute('time', article.date);

		const p = this.querySelector('p');
		p.textContent = article.description;
	  }
	}
  }
  customElements.define('custom-article', CustomArticle);

  class CustomSearch extends HTMLElement {
	constructor() {
	  super();
	  this.articles = articles;
	}
  
	connectedCallback() {
	  const dialogBtn = document.querySelector('#search-bar');
	  const closeBtn = this.querySelector('.close-btn');
	  const dialog = this.querySelector('dialog');
  
	  dialogBtn.addEventListener('click', () => {
		dialog.style.visibility = 'visible';
		dialog.showModal();
	  });
	  closeBtn.addEventListener('click', () => {
		dialog.style.visibility = 'hidden';
		dialog.close();
	  });
	  const siteSearch = this.querySelector('#site-search');
	  siteSearch.addEventListener('input', (event) => this.search(event));
  
	  this.renderResults('')
	}
  
	search(event) {
	  event.preventDefault();
	  const siteSearch = this.querySelector('#site-search');
	  const term = siteSearch.value
	  // console.log({term});
	  this.renderResults(term)
	}
  
	renderResults(term = '') {
	  // Implement your search logic here
	  const searchResults = this.querySelector('#search-results');
	  searchResults.innerHTML = '';
	  const _articles = this.articles
		.filter(article => article.title.toLowerCase().includes(term.toLowerCase()))
  
	  // mode 3 using <template>
	  const template = this.querySelector('template').content;
	  // loop
	  _articles.map(article => {
		const li = template.querySelector('li').cloneNode(true);
		// item-image, item-title, item-description
		li.querySelector('.card .item-image').src = article.image;
		li.querySelector('.card .item-description').textContent = article.description;
		// replate relative-time time
		li.querySelector('relative-time').setAttribute('time', article.date)
		li.querySelector('.card .item-title a').textContent = article.title;
  
		const enlace = li.querySelector('.card .item-title a')
		const href = enlace.href
		enlace.href = href.replace('{id}', article.id)
  
		searchResults.appendChild(li);
	  })
	}
  }
  customElements.define('custom-search', CustomSearch);
