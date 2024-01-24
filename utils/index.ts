export const productBlockHtmlString = `<div href="/product-page" className="product-block">
  <a className="image-wrapper">
    <div className="floating top-left">
      <span className="badge new">New</span>
      <span className="badge sale">-50%</span>
      <span className="badge sold-out">Sold Out</span>
    </div>

    <img alt="Product A1" src="https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe" />
  </a>

  <div className="caption group">
    <section>
      <div className="caption-headline">
        <span className="brand">Brand</span>
        <arrowUpRightIcon />
      </div>

      <a className="name">Product A</a>
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
        </div>
      </div>
    </section>

    <div class="product-footer">
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
          <span>Details</span>
        </button>
      </div>
    </div>
  </div>
</div>`;

export const productBlockCssString = `div.product-block-basic {
  @apply flex w-full flex-col self-stretch overflow-hidden rounded border-0 border-gray-300 bg-[#f8fafa] font-sans transition-all hover:bg-[#fefefe] hover:shadow-lg dark:border-gray-700 dark:bg-black/30 md:w-64;
}

div.product-block-basic > a.image-wrapper {
  @apply relative overflow-hidden;
}

div.product-block-basic > a.image-wrapper > .floating {
  @apply absolute m-2 flex flex-col gap-y-1.5;
}

div.product-block-basic > a.image-wrapper > .floating.top-left {
  @apply left-0 top-0;
}

div.product-block-basic > a.image-wrapper > .floating.top-right {
  @apply right-0 top-0;
}

div.product-block-basic > a.image-wrapper > .floating.bottom-left {
  @apply bottom-0 left-0;
}

div.product-block-basic > a.image-wrapper > .floating.bottom-right {
  @apply bottom-0 right-0;
}

div.product-block-basic > a.image-wrapper > .floating > span.badge {
  @apply z-10 h-full w-full rounded-md border px-1.5 py-1.5 text-center text-xs font-medium tracking-tighter text-white;
}

div.product-block-basic > a.image-wrapper > .floating > span.badge.new {
  @apply border-lime-700 bg-lime-600/90;
}

div.product-block-basic > a.image-wrapper > .floating > span.badge.sale {
  @apply border-rose-800 bg-rose-700/90;
}

div.product-block-basic > a.image-wrapper > .floating > span.badge.sold-out {
  @apply border-gray-600 bg-gray-500/90;
}

div.product-block-basic > a.image-wrapper > img {
  @apply block w-full transition-all hover:scale-110;
}

div.product-block-basic > a.image-wrapper > img.sold-out {
  @apply grayscale filter;
}

div.product-block-basic > div.caption {
  @apply relative flex flex-1 flex-col justify-between;
}

div.product-block-basic > div.caption > section {
  @apply px-3 pt-3;
}
div.product-block-basic > div.caption > section > div.caption-headline {
  @apply flex items-center justify-start gap-x-1.5;
}

div.product-block-basic > div.caption > section > div.caption-headline.across {
  @apply justify-between;
}

div.product-block-basic > div.caption > section > div.caption-headline > span.brand {
  @apply inline-flex text-base font-medium uppercase tracking-tighter text-gray-500 dark:text-gray-400;
}

div.product-block-basic > div.caption > section > div.caption-headline > svg.icon {
  @apply h-5 w-5 -rotate-45 stroke-gray-500 opacity-0 transition-opacity duration-200 ease-in-out dark:stroke-gray-400;
}

div.product-block-basic > div.caption:hover > section > div.caption-headline > svg.icon {
  @apply opacity-100;
}

div.product-block-basic > div.caption > section > a.title {
  @apply w-min whitespace-nowrap text-xl font-bold hover:underline;
}

div.product-block-basic > div.caption > section > p.description {
  @apply line-clamp-3 text-sm leading-snug tracking-tight;
}

div.product-block-basic > div.caption > section > div.price-and-ratings {
  @apply mb-5 mt-2 flex w-full flex-col justify-start gap-2;
}

div.product-block-basic > div.caption > section > div.price-and-ratings.across {
  @apply flex-row justify-between;
}

div.product-block-basic > div.caption > section > div.price-and-ratings > div.ratings {
  @apply flex flex-col items-start text-xs;
}

div.product-block-basic > div.caption > section > div.price-and-ratings.across > div.ratings {
  @apply items-end;
}

div.product-block-basic > div.caption > section > div.price-and-ratings > div.ratings > div.rating {
  @apply flex items-center gap-x-1 tracking-tight hover:underline;
}

div.product-block-basic > div.caption > section > div.price-and-ratings > div.ratings > div.rating > svg.star {
  @apply mr-[1px] h-3 w-3 fill-amber-300 stroke-amber-500;
}

div.product-block-basic > div.caption > section > div.price-and-ratings > div.ratings > div.rating > span.rating-float {
  @apply font-semibold text-gray-900 dark:text-white;
}

div.product-block-basic > div.caption > section > div.price-and-ratings > div.ratings > div.rating > span.rating-count {
  @apply font-semibold text-gray-900 dark:text-white;
}

div.product-block-basic > div.caption > section > div.price-and-ratings > div.ratings > span.sold-a-lot {
  @apply font-bold tracking-tight text-gray-500 hover:underline dark:text-gray-400;
}

div.product-block-basic > div.caption > section > div.price-and-ratings > div.prices {
  @apply flex flex-col gap-y-1.5 text-base;
}

div.product-block-basic > div.caption > section > div.price-and-ratings > div.prices > span.price {
  @apply w-min font-semibold leading-none tracking-tight;
}

div.product-block-basic > div.caption > section > div.price-and-ratings > div.prices > span.price.old {
  @apply font-medium line-through;
}

div.product-block-basic > div.caption > section > div.price-and-ratings > div.prices > span.price.sale {
  @apply text-lg font-semibold tracking-tight text-rose-500 hover:underline;
}

div.product-block-basic > div.caption > div.product-footer {
  @apply px-3 pb-3.5;
}

div.product-block-basic > div.caption > div.product-footer > div.colors {
  @apply mt-3 flex w-min items-center justify-between gap-x-2;
}

div.product-block-basic > div.caption > div.product-footer > div.colors > button.color {
  @apply h-6 w-6 rounded-md border-2 transition-all duration-200 ease-in-out hover:opacity-80;
}

div.product-block-basic > div.caption > div.product-footer > div.colors > button.color.active {
  @apply ring-2 ring-gray-400 ring-offset-2 ring-offset-white dark:ring-white dark:ring-offset-gray-800;
}

div.product-block-basic > div.caption > div.product-footer > div.buttons {
  @apply mt-3 flex items-center justify-between gap-x-2;
}

div.product-block-basic > div.caption > div.product-footer > div.buttons > button {
  @apply flex items-center justify-center gap-x-1 rounded px-3 py-2 text-sm font-medium tracking-tighter transition-all duration-200 ease-in-out disabled:cursor-not-allowed disabled:opacity-40;
}

div.product-block-basic > div.caption > div.product-footer > div.buttons > button svg {
  @apply h-5 w-5;
}

div.product-block-basic > div.caption > div.product-footer > div.buttons > button.add-to-cart {
  @apply flex-1 bg-emerald-600 text-white enabled:hover:bg-emerald-700;
}

div.product-block-basic > div.caption > div.product-footer > div.buttons > button.details {
  @apply bg-gray-500 text-white enabled:hover:bg-gray-600 dark:bg-white/20 enabled:hover:dark:bg-white/30;
}

div.product-block-basic > div.caption > div.product-footer > div.buttons > button.details > span {
  @apply hidden;
}`;
