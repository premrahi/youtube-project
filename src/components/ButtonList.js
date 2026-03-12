import Button from "./Button";

const Names = [
  'All',
  'Music',
  'News',
  'Mixes',
  'Game Of Thrones - season 8',
  'Podcast',
  'Movies',
  'Tailers',
  'Dhurandar',
  'Data Structures',
  'Iran',
  'Software Engineering',
  'News',
  'Mixes',
  'Game Of Thrones - season 8',
  'Podcast',
];

const ButtonList = () => {
  return (
    <div className="m-2 p-2 flex overflow-x-auto no-scrollbar">
      {Names.map((name,index) => (
        <Button name={name} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
