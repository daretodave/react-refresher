import TabButton from "./TabButton/TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";

export default function Examples() {
    const [selectedTab, setSelectedTab] = useState();

    function handleTabSelect(tabName) {
        console.log('Tab selected =>', tabName);

        setSelectedTab(tabName);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTab === "components"}
                           onSelect={() => handleTabSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTab === "jsx"}
                           onSelect={() => handleTabSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTab === "props"}
                           onSelect={() => handleTabSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTab === "state"}
                           onSelect={() => handleTabSelect('state')}>State</TabButton>
            </menu>
            {!selectedTab && <p>Select a tab to learn more!</p>}
            {selectedTab && <div id="tab-content">
                <h3>{EXAMPLES[selectedTab].title}</h3>
                <p>{EXAMPLES[selectedTab].description}</p>
                <pre>
                            <code>{EXAMPLES[selectedTab].code}</code>
                        </pre>
            </div>}
        </section>
    )
}