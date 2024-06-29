import Header from '/src/ components/Header/Header.jsx'
import PostHeader from '/src/ components/PostHeader/PostHeader.jsx'
import CardList from '/src/ components/cards/CardList.jsx'
import About from '/src/ components/AboutUs/About.jsx'
import Footer from '/src/ components/Footer/Footer.jsx'


export default function mainComponent() {
  return (
    <>
      <Header/>
      <PostHeader/>
      <CardList/>
      <About/>
      <Footer/>
    </>
  )
}