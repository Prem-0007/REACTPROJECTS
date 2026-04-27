import useLocalStorage from "./useLocalStorage";

export function LightDark() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <div className="light-dark" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>
          Change Theme
        </button>
      </div>
    </div>
  );
}