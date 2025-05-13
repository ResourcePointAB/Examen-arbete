import "../assets/styles/global.css";
import "../assets/styles/blog.css";
import { Row, Col} from "react-bootstrap";
import blog from '../assets/images/blog.jpg';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LinkedInPost {
  id: string;
  content: string;
  imageUrl: string;
  link: string;
}

function Blog() {
  const { t } = useTranslation()
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //API-anrop till backend som hanterar LinkedIn API-anropen
    fetch('http://localhost:5000/api/linkedinPosts')
      .then(response => response.json())
      .then((data: LinkedInPost[]) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching LinkedIn posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="careers-page">

      {/* First section*/}
      <section className="careers-hero" style={{
          backgroundImage: `linear-gradient(rgba(46, 45, 45, 0.5), rgba(33, 32, 32, 0.5)), url(${blog})`,
          backgroundSize: "cover",
          height: "70vh",
          backgroundPosition: "center 10%",
          backgroundRepeat: "no-repeat",
        }}>
          <Row className="text-container text-center justify-content-center align-items-center">
            <Col md={8}>
              <h1>{t("blog.title")}</h1>
              <p>{t("blog.description")}
              </p>
              <div className="stats-svg-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,197.3C384,213,480,267,576,282.7C672,299,768,277,864,245.3C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>            
              </div>
            </Col>
          </Row>
      </section>

      {/* LinkedIn-inlägg */}
      <section className="linkedin-posts">
        <h2>Latest LinkedIn Updates</h2>
        {loading ? (
          <p>Loading posts...</p>
        ) : posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="linkedin-post">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                {post.imageUrl && <img src={post.imageUrl} alt="LinkedIn post snapshot" />}
                <p>{post.content}</p>
              </a>
            </div>
          ))
        ) : (
          <p>No posts available at the moment.</p>
        )}
      </section>
    </div>
  );
}

export default Blog;
