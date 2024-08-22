import "../../App.css";

function Card({ bgImg, bgColor, title, current, previous, previousHour }) {
  return (
    <div class="act1" style={{ backgroundColor: bgColor }}>
      <div class="actIcon">
        <img src={bgImg} alt="" />
      </div>

      <div class="containerTextact">
        <div class="begin">
          <p>{title}</p>
          <img src="./images/icon-ellipsis.svg" alt="" />
        </div>
        <div class="end">
          <p>{current}hrs</p>
          <p>
            {previous} - {previousHour}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
