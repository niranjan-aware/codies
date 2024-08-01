import React,{Fragment} from 'react';
import Header from './Header'
import Footer from './Footer'
import  Title  from "../shared/Title";
export default function AppLayout(WrappedComponent) {
  return function LayoutComponent(props) {
    return (
      <Fragment>
        <Title title={"chat-app"}/>
      <div className="min-h-screen flex flex-col ">
        <header className="header"><Header/></header>
        <main className="flex-grow  " >
          <WrappedComponent {...props} />
        </main>
        <footer className="footer bg-gray-300"><Footer/></footer>
      </div>
      </Fragment>
    );
  };
}
