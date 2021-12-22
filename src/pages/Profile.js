import React, { useEffect } from 'react';
export default function Profile () {
    useEffect(() => {
        document.title = 'Profile';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Profile</h1>
            <p className="section-description">
                Halo namaku Osas 👦 Aku seorang Frontend Developer 💻
            </p>
            <p className="section-description">
                Hobiku main game 🎮 dan juga mendengarkan musik 🎧{ ' ' }
            </p>
        </section>
    );
}
