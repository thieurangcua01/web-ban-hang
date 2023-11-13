import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Chào mừng đến với ProShop',
  description: 'Giá rẻ trên từng sản phẩm',
  keywords: 'Đồ điện tử, mua đồ điện tử, đồ điện tử giá rẻ',
};

export default Meta;
