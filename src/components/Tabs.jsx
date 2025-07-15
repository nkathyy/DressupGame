import "./Tabs.css";

const Tab = ({ tabInfo, tabNo, updateTab, currentTab }) => {
  function onclickTab() {
    updateTab(tabInfo.index);
    // console.log(tabInfo.index);
  }

  // console.log(tabInfo.index);
  return (
    <div
      style={{ width: `calc(100%/${tabNo})` }}
      className={`tab ${
        JSON.stringify(currentTab) === JSON.stringify(tabInfo.index)
          ? "selected"
          : ""
      }`}
      onClick={onclickTab}
    >
      <p>{tabInfo.name}</p>
    </div>
  );
};

const Tabs = ({ tabArray, currentTab, updateTab }) => {
  const tabNo = tabArray.length;

  return (
    <div className="tabs">
      {tabArray.map((tabInfo) => (
        <Tab
          key={tabInfo.index}
          tabInfo={tabInfo}
          tabNo={tabNo}
          updateTab={updateTab}
          currentTab={currentTab}
        />
      ))}
    </div>
  );
};

export default Tabs;
