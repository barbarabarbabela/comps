import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click");
  };

  return (
    <div>
      <div>
        <Button primary rounded className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary>Buy now</Button>
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
          Something
        </Button>
      </div>
      <div>
        <Button success>Hide Ads</Button>
      </div>
      <div>
        <Button danger>
          <GoCloudDownload />
          Danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
