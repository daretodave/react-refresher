import {useState} from "react";

import {CORE_CONCEPTS, EXAMPLES} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {

    const [selectedTab, setSelectedTab] = useState();

    function handleTabSelect(tabName) {
        console.log('Tab selected =>', tabName);

        setSelectedTab(tabName);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>{CORE_CONCEPTS.map(concept => (
                        <CoreConcept {...concept}/>
                    ))}</ul>
                </section>
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
            </main>
        </div>
    );
}

export default App;
