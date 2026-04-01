import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Navbar(){
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchTerm.trim()){
            navigate(`/search/${searchTerm}`);
        }
    }

   const styles = {
    nav: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "#111",
        color: "#fff",
   },
   logo:{
    cursor: "pointer",
   },
   input:{
    padding:"8px",
    width: "300px"
   },
};


return (
    <nav style={styles.nav}>
       <h2 style={styles.logo}>Youtube Clone</h2>
       <form onSubmit={handleSearch}>
            <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.input}
            placeholder="Search..."
            />
            <button type="submit">Search</button>
       </form>
    </nav>

);


}



export default Navbar;