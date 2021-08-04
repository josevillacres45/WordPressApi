export function PostCard(props) {

    let { date, id, title, slug, _embedded } = props;
    let dateFormat = new Date(date).toLocaleString(),
        urlPoster = _embedded["wp:featuredmedia"] 
                    ? _embedded["wp:featuredmedia"][0].source_url 
                    : "app/assets/favicon.jpg";
    
    
    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}"/>
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${dateFormat}">Fecha: ${dateFormat}</time>
                <a href="#/${slug}" data-slug="${slug}">Ver Publicacion</a>
            </p>
        </article>
    `;
}