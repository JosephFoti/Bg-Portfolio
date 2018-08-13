import React from 'react';

const Header = () => {
    return (
        <nav className="px2 mt1 center">
            <img src="#" />
            <div className="my3">
                <a href="/" className="mr2 center middle">Home</a>
                <a href="#" className="mr2">Galleries</a>
                <a href="#">About</a>
            </div>
            <div className="hide">
                <a href="/gallery/collage">collage</a>
                <a href="/gallery/word-art">Word Art</a>
                <a href="/gallery/comic-concepts">Comic Concepts</a>
                <a href="/gallery/painting">Painting</a>
            </div>
        </nav>
    );
};

export default Header;
