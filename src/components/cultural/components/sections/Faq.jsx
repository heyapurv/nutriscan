import React, { useState, useLayoutEffect, useRef } from "react";

// Since styled-components is not available, we'll use inline styles
// and a simple CSS-in-JS approach.

const styles = {
  section: {
    minHeight: '100vh',
    height: 'auto',
    width: '100vw',
    backgroundColor: '#202020', // Assuming props.theme.text
    position: 'relative',
    color: '#fff', // Assuming props.theme.body
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '4rem 0',
  },
  title: {
    fontSize: '3em', // Approximating fontxxl
    textTransform: 'uppercase',
    color: '#fff',
    margin: '1rem auto',
    borderBottom: '2px solid #fff',
    width: 'fit-content',
  },
  container: {
    width: '75%',
    margin: '2rem auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  box: {
    width: '45%',
  },
  // Basic Accordion styles
  accordionContainer: {
    marginBottom: '1rem',
    borderBottom: '1px solid #fff',
    paddingBottom: '0.5rem',
  },
  accordionTitle: {
    fontSize: '1.2em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  accordionContent: {
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-out, padding 0.3s ease-out',
    padding: '0 1rem',
    marginTop: '0.5rem',
  },
  accordionContentOpen: {
    maxHeight: '500px', // Set a max-height to allow transition
    padding: '1rem',
  }
};


// Creating a self-contained Accordion component to resolve the import error.
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.accordionContainer}>
      <div style={styles.accordionTitle} onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      <div style={{ ...styles.accordionContent, ...(isOpen ? styles.accordionContentOpen : {}) }}>
        {children}
      </div>
    </div>
  );
};


const Faq = () => {
  // Since GSAP is not available, we can't use ScrollTrigger for pinning.
  // A common alternative for this effect is CSS position: sticky.
  // However, pinning the entire <Section> is complex with sticky.
  // For this example, we'll remove the pinning effect to ensure the component renders without errors.

  const ref = useRef(null);

  // The useLayoutEffect for GSAP is no longer needed.

  return (
    <section ref={ref} id="faq" style={styles.section}>
      <h1 style={styles.title}>FAQ</h1>

      {/* We need to manually handle responsiveness without styled-components media queries */}
      <div style={styles.container} className="faq-container">
        <div style={styles.box} className="faq-box">
          <Accordion title="WHERE CAN I VIEW MY NFTS?">
            Once minted or bought simply connect to your OpenSea account to view
            your NFTs.
          </Accordion>
          <Accordion title="WHAT IS THE METAVERSE?">
            A metaverse is a network of 3D virtual worlds focused on social
            connection. In futurism and science fiction, it is often described
            as a hypothetical iteration of the Internet as a single, universal
            virtual world that is facilitated by the use of virtual and
            augmented reality headsets.
          </Accordion>
          <Accordion title="WHY DO WE NEED ROYALTIES?">
            The amount of royalties was fixed at 5% to finance the Weirdos
            Club's projects. We have the ambition to organize multiple events
            around the world in order to strengthen the community and build a
            network of entrepreneurs and investors with the same mindset and
            common interests.
          </Accordion>
        </div>
        <div style={styles.box} className="faq-box">
          <Accordion title="HOW CAN I USE MY NFT?">
            You will be able to use your NFT as an avatar in the Metaverse and
            our future video game. Holding also means that you are part of an
            exclusive network of investors and entrepreneurs.
          </Accordion>
          <Accordion title="WHAT ARE THE WEIRDOS?">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deserunt consequatur quisquam maxime molestias dolores ipsum,
            exercitationem vel sint quidem aliquam modi quis impedit corporis
            unde inventore fugiat provident in.
          </Accordion>
          <Accordion title="WHAT IS THE FUSION PROCESS?">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim
            veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem,
            maxime, similique neque minus aliquam dolore doloremque laboriosam,
            facilis quibusdam unde sint officia.
          </Accordion>
        </div>
      </div>
      
      {/* Adding a style tag to handle media queries for responsiveness */}
      <style>{`
        @media (max-width: 768px) { /* 48em */
          .faq-container {
            width: 90%;
            flex-direction: column;
          }
          .faq-box {
            width: 100%;
            align-self: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Faq;
