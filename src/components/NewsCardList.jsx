import React from "react";
import NewsCard from "./NewsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// componenta se va ocupa de mai multe carduri pe ecran, se va ocupa de grupare
export function NewsCardList(props) {
  const { newslist } = props;

  return (
    <div>
      <Container>
        <Row>
          {newslist.map((news) => {
            return (
              <Col xs={12} md={4} key={news.id} className="mb-4 pt-5">
                <NewsCard
                  id={news.id}
                  title={news.title}
                  description={news.description}
                  thumbnail={news.thumbnail}
                  closeButton={news.closeButton}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default NewsCardList;
