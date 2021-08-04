export function SearCard(props) {
    let {id, title, _embedded} = props;
    let slug = _embedded.self[0].slug,
        urlPoster = _embedded["wp:featuredmedia"] 
                    ? _embedded["wp:featuredmedia"][0].source_url 
                     : _embedded.self[0].jetpack_featured_media_url
                       ? _embedded.self[0].jetpack_featured_media_url
                       :  "app/assets/favicon.jpg";

    console.log(_embedded)
    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}"/>
            <h2>${title}</h2>
            <p>
                <a href="#/${slug} data-id="${id}">Ver publicacion</a>
            </p>
        </article>
    `;

}