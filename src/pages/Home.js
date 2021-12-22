import React, { useEffect } from 'react';
export default function Home () {
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Selamat Datang 🙌</h1>
            <p className="section-description">
                Hai salam kenal semua, kalian bisa lihat tentang diriku disini 😎
            </p>
        </section>
    );
}
