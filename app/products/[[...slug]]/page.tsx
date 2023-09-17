import React from 'react';

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}
// http://localhost:3000/products/1?sortOrder=price

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProductPage {slug} - {sortOrder}
    </div>
  );
};

export default ProductPage;
