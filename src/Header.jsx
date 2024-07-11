
export const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.title}>Tic Tac Toe</h1>
        <p style={styles.subtitle}>Welcome to the Game</p>
      </div>
    </header>
  );
};

const styles = {
    header: {
      backgroundColor: '#3498db', // Color de fondo azul vibrante
      color: '#fff', // Texto en color blanco
      padding: '20px 0', // Espaciado interno arriba y abajo
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra ligera
      position: 'fixed', // Fijar en la parte superior
      width: '100%', // Ancho completo
      zIndex: 1000, // Asegurar que esté sobre el contenido
    },
    container: {
      maxWidth: '960px', // Ancho máximo del contenido
      margin: '0 auto', // Centrar horizontalmente
      padding: '0 20px', // Espaciado interno a los lados
      display: 'flex', // Mostrar como flexbox
      justifyContent: 'space-between', // Espacio uniforme entre elementos
      alignItems: 'center', // Alinear verticalmente al centro
    },
    title: {
      fontSize: '28px', 
      margin: '0', 
      letterSpacing: '1px', 
      textTransform: 'uppercase', 
    },
    subtitle: {
      fontSize: '24px',
      margin: '0', 
      fontStyle: 'italic',
    },
  };

export default Header;
