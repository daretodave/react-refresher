import {useState} from "react";

import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {

    const [selectedTab, setSelectedTab] = useState('Please select a tab!');
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
                        <TabButton onSelect={() => handleTabSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleTabSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleTabSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleTabSelect('state')}>State</TabButton>
                    </menu>
                    {selectedTab}
                </section>
            </main>
        </div>
    );
}

export default App;
