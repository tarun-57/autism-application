import style from "../styles/Home.module.css"
function index() {
  const handleOpenLink = (url) => {
    window.location.pathname(url)
  }
  return (
    <>
    <div className={style["hero"]}>
      <div className={style["heading"]}><h1>How can I help you?</h1></div>
      <section className={style["body-sec"]}>
        <div className={[style["section"],["row"]].join(" ")}>
          <a className={style["btn"]} href="/autistic"> I <br></br>am  <br></br>Autistic</a>
          <a className={style["btn"]} href="/helper"> I <br></br>am a <br></br>Helper</a>
        </div>
      </section>
      </div>
    </>
  );
}

export default index;
