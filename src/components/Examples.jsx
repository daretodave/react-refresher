import TabButton from "./TabButton/TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedTab, setSelectedTab] = useState();

    function handleTabSelect(tabName) {
        console.log('Tab selected =>', tabName);

        setSelectedTab(tabName);
    }

    let tabContent = <p>Select a tab to learn more!</p>;
    if (selectedTab) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p>{EXAMPLES[selectedTab].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTab].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={
                <>
                    <TabButton isSelected={selectedTab === "components"}
                               onClick={() => handleTabSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedTab === "jsx"}
                               onClick={() => handleTabSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedTab === "props"}
                               onClick={() => handleTabSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedTab === "state"}
                               onClick={() => handleTabSelect('state')}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>
        </Section>
    )
}