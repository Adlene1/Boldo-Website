import React from 'react';
import Image from 'next/image';

export default function Services() {
    const containerStyle = {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "84px 2rem",
        textAlign: "center",
    };

    const headingStyle = {
        fontWeight: "400",
        fontSize: "48px",
        lineHeight: "72px",
        color: "#000",
        maxWidth: "842px",
        margin: "0.5rem 0 50px 0",
    };

    const subTextStyle = {
        fontSize: "20px",
        lineHeight: "32px",
        color: "#777777",
    };

    const cardsContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '100px',
        padding: '2rem',
        flexWrap: 'wrap'
    };

    return (
        <>
            {/* Header Text Section */}
            <div style={containerStyle}>
                <p style={subTextStyle}>Our Services</p>
                <h2 style={headingStyle}>Handshake infographic mass market crowdfunding iteration.</h2>
            

            {/* Cards Section */}
            <div style={cardsContainerStyle}>
                {/* Card 1 */}
                <div style={styles.card}>
                    <div style={styles.topSection}>
                        <Image
                            src="/Rectangle 1270.png" // Image for the first card
                            alt="Feature 1"
                            width={300}
                            height={354}
                        />
                    </div>
                    <div style={styles.content}>
                        <h3 style={styles.title}>Cool feature title</h3>
                        <p style={styles.paragraph}>
                            Learning curve network effects return on investment.
                        </p>
                        <div>
                            <a href="#" style={styles.link}>
                                Explore page
                                <Image src="/arrow-right.png" alt='arrow right' width={24} height={26} />
                            </a>
                            <div style={styles.linkWrapper}></div>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div style={styles.card}>
                    <div style={styles.topSection}>
                        <Image
                            src="/Rectangle 1270 (1).png"
                            alt="Feature 2"
                            width={300}
                            height={354}
                        />
                    </div>
                    <div style={styles.content}>
                        <h3 style={styles.title}>Another feature</h3>
                        <p style={styles.paragraph}>
                            Beta prototype sales iPad gen-z marketing.
                        </p>
                        <div>
                            <a href="#" style={styles.link}>
                                Explore page
                                <Image src="/arrow-right.png" alt='arrow right' width={24} height={26} />
                            </a>
                            <div style={styles.linkWrapper}></div>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div style={styles.card}>
                    <div style={styles.topSection}>
                        <Image
                            src="/Rectangle 1270 (2).png"
                            alt="Feature 3"
                            width={300}
                            height={354}
                        />
                    </div>
                    <div style={styles.content}>
                        <h3 style={styles.title}>More features</h3>
                        <p style={styles.paragraph}>
                            Pitch termsheet backing validation focus.
                        </p>
                        <div>
                            <a href="#" style={styles.link}>
                                Explore page
                                <Image src="/arrow-right.png" alt='arrow right' width={24} height={26} />
                            </a>
                            <div style={styles.linkWrapper}></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

const styles = {
  card: {
    width: "300px",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    display: 'flex',
    flexDirection: 'column',
  },
  topSection: {
    width: '300px',
    height: '354px',
    borderRadius: '24px',
    marginBottom: "24px",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    textAlign: "left",
},
  title: {
    fontSize: "24px",
    fontWeight: "400",
    lineHeight: "36px",
    color: "#000000",
    marginBottom: "12px",
  },
  paragraph: {
    color: "#777777",
    fontStyle: "regular",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "32px",
    letterSpacing: "0",
    marginBottom: "28px",
    flexGrow: 1,
  },
  linkWrapper: {
    width: "164px",
    height: "1px",
    color: "#0a2640",
    borderTop: '1px solid #0a2640',
    marginTop: "8px",
  },
  link: {
    display: "inline-flex",
    gap: "12px",
    color: "#0a2640",
    fontWeight: "700",
    textDecoration: "none",
    fontStyle: "bold",
    fontSize: "20px",

  },
  svg: {
    width: "24px",
    height: "24px",
  }
};