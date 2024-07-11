export const Footer = () => {
    return (
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>&copy; {new Date().getFullYear()} Tic Tac Toe Game</p>
          <p>Made with ❤️ by Javier Torrubia Pradas</p>
        </div>
      </footer>
    );
  };

  const styles = {
    footer: {
      backgroundColor: '#2c3e50',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
    },
    container: {
      maxWidth: '960px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
    },
  };
  