import React, { useEffect } from 'react';
export default function Contact () {
    useEffect(() => {
        document.title = 'Contact';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p>Kamu bisa menghubungiku disini</p>
            <p>📞 0877889966</p>
            <p>📬 osas@blabla.com</p>
        </section>
    );
}
