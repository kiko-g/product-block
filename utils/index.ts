export const productBlockHtmlString = `<a href="/product-page" className="product-block">
  <div className="image-wrapper">
    <div className="floating top-left">
      <span className="badge new">New</span>
      <span className="badge sale">-50%</span>
      <span className="badge sold-out">Sold Out</span>
      <span className="badge hot">Hot</span>
    </div>

    <img
      alt="Product A1"
      src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe"
    />
  </div>

  <div className="caption group">
    <section>
      <div className="caption-headline">
        <span className="brand">Brand</span>
        <arrowUpRightIcon />
      </div>

      <h3 className="name">Product A</h3>
      <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
      <div className="price-and-ratings">
        <div className="prices">
          <span className="price old">10.00</span>
          <span className="price sale">5.00</span>
        </div>

        <div className="ratings">
          <div className="rating">
            <starIcon />
            <span className="rating-float">4.95</span>
            <span className="rating-count">(73)</span>
          </div>
          <span className="sold-a-lot">500+ sold this week</span>
        </div>
      </div>
    </section>

    <footer>
      <div className="colors">
        <button onclick="setColor('Gray')" class="color"></button>
        <button onclick="setColor('Brown')" class="color"></button>
        <button onclick="setColor('Blue')" class="color"></button>
        <button onclick="setColor('Black')" class="color active"></button>
      </div>

      <div className="buttons">
        <button className="add-to-cart" disabled="{status.soldOut}">
          <shoppingCartIcon />
          <span>Add to cart</span>
        </button>

        <button className="details">
          <horizontalEllipsisIcon />
        </button>
      </div>
    </footer>
  </div>
</a>`;

export const productBlockCssString = `a.product-block {
  @apply flex w-full flex-col self-stretch overflow-hidden rounded border-0 border-gray-300 bg-white shadow-xl transition-all dark:border-gray-700 dark:bg-gray-800 md:w-64;
}

a.product-block > .image-wrapper {
  @apply relative overflow-hidden;
}

a.product-block > .image-wrapper > .floating {
  @apply absolute m-2 flex flex-col gap-y-1.5;
}

a.product-block > .image-wrapper > .floating.top-left {
  @apply left-0 top-0;
}

a.product-block > .image-wrapper > .floating.top-right {
  @apply right-0 top-0;
}

a.product-block > .image-wrapper > .floating.bottom-left {
  @apply bottom-0 left-0;
}

a.product-block > .image-wrapper > .floating.bottom-right {
  @apply bottom-0 right-0;
}

a.product-block > .image-wrapper > .floating > span.badge {
  @apply z-10 h-full w-full rounded-md px-1.5 py-1.5 text-center text-xs font-medium tracking-tighter text-white;
}

a.product-block > .image-wrapper > .floating > span.badge.sale {
  @apply border border-rose-800 bg-rose-700/90;
}

a.product-block > .image-wrapper > .floating > span.badge.new {
  @apply border border-lime-700 bg-lime-600/90;
}

a.product-block > .image-wrapper > .floating > span.badge.hot {
  @apply border border-orange-600 bg-orange-500/90 font-bold uppercase;
}

a.product-block > .image-wrapper > .floating > span.badge.sold-out {
  @apply border border-gray-600 bg-gray-500/90;
}

a.product-block > .image-wrapper > img {
  @apply block w-full transition-all hover:scale-110;
}

a.product-block > .image-wrapper > img.sold-out {
  @apply grayscale filter;
}

a.product-block > div.caption {
  @apply relative flex flex-1 flex-col justify-between px-3 pb-4 pt-3 transition hover:bg-slate-400/5 dark:hover:bg-white/5;
}

a.product-block > div.caption > section > div.caption-headline {
  @apply flex items-center justify-between gap-x-3;
}

a.product-block > div.caption > section > div.caption-headline > span.brand {
  @apply inline-flex flex-1 text-sm font-medium uppercase tracking-tighter;
}

a.product-block > div.caption > section > div.caption-headline > svg.icon {
  @apply h-5 w-5 fill-none stroke-black transition-opacity duration-200 ease-in-out dark:stroke-white;
}

a.product-block > div.caption > section > h3.name {
  @apply text-xl font-bold;
}

a.product-block > div.caption > section > p.description {
  @apply text-sm font-normal;
}

a.product-block > div.caption > section > div.price-and-ratings {
  @apply mb-5 mt-2 flex w-full items-center justify-between gap-0;
}

a.product-block > div.caption > section > div.price-and-ratings > div.prices {
  @apply flex flex-col;
}

a.product-block > div.caption > section > div.price-and-ratings > div.prices > span.price {
  @apply text-lg font-semibold tracking-tight;
}

a.product-block > div.caption > section > div.price-and-ratings > div.prices > span.price.old {
  @apply text-lg font-medium line-through;
}

a.product-block > div.caption > section > div.price-and-ratings > div.prices > span.price.sale {
  @apply text-lg font-semibold tracking-tight text-rose-500 hover:underline;
}

a.product-block > div.caption > section > div.price-and-ratings > div.ratings {
  @apply flex flex-col items-end text-xs;
}

a.product-block > div.caption > section > div.price-and-ratings > div.ratings > div.rating {
  @apply flex items-center gap-x-1 tracking-tight hover:underline;
}

a.product-block > div.caption > section > div.price-and-ratings > div.ratings > div.rating > svg.star {
  @apply mr-[1px] h-3 w-3 fill-amber-300 stroke-amber-500;
}

a.product-block > div.caption > section > div.price-and-ratings > div.ratings > div.rating > span.rating-float {
  @apply font-semibold text-gray-900 dark:text-white;
}

a.product-block > div.caption > section > div.price-and-ratings > div.ratings > div.rating > span.rating-count {
  @apply font-semibold text-gray-900 dark:text-white;
}

a.product-block > div.caption > section > div.price-and-ratings > div.ratings > span.sold-a-lot {
  @apply font-bold tracking-tight text-gray-500 hover:underline dark:text-gray-400;
}

a.product-block > div.caption > footer > div.colors {
  @apply mt-3 flex w-min items-center justify-between gap-x-2;
}

a.product-block > div.caption > footer > div.colors > button.color {
  @apply h-6 w-6 rounded-full border transition-all duration-200 ease-in-out hover:opacity-80;
}

a.product-block > div.caption > footer > div.colors > button.color.active {
  @apply ring-2 ring-gray-400 ring-offset-2 ring-offset-white dark:ring-white dark:ring-offset-gray-800;
}

a.product-block > div.caption > footer > div.buttons {
  @apply mt-3 flex items-center justify-between gap-x-2;
}

a.product-block > div.caption > footer > div.buttons > button {
  @apply flex items-center justify-center gap-x-1 rounded px-3 py-2 text-sm font-medium tracking-tighter transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-40;
}

a.product-block > div.caption > footer > div.buttons > button.add-to-cart {
  @apply flex-1 bg-emerald-600 text-white hover:bg-emerald-700;
}

a.product-block > div.caption > footer > div.buttons > button.details {
  @apply bg-gray-100 text-gray-700 hover:bg-gray-200;
}`;
