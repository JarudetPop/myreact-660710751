import { Link } from "react-router-dom";
import './style/HomePage.css';
import React from "react";
const HomePage = () => {
    return (
        <div>
            <h1>ยินดีต้อนรับสู่ร้านหนังสือ</h1>
            <p>ขอบคุณครับ</p>
            <Link to="/books">View Books</Link>
        </div>
    );
}
export default HomePage;