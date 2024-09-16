import React from 'react';
import Header from '../../component/header/Header';
import Footer from '../../component/footer/Footer';
import Banner from '../../component/Banner/Banner';
import RowList from '../../component/Rows/RowList/RowList';
import Row from '../../component/Rows/Row/Row';

function Home() {
  return (
    <>
<Header/>
<Banner/>
<Row/>
<RowList/>
<Footer/>


    </>
  );
}

export default Home;
