import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
                <span className="scroll-to-top__wrapper"><span className="scroll-to-top__inner"></span></span>
                <span className="scroll-to-top__text">Go Back Top</span>
            </a>
        </>
    );
}
