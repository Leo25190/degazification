import PageTitle from "../../../common/components/PageTitle";
import Input from "../../../common/components/Input";
import { useState } from "react";
import useLocalStorage from "../../../common/hooks/useLocalStorage";
import { TextToImageSettings } from "../../../common/models/settings/TextToImageSettings";

const Settings = () => {
    const [isInEditMode, setIsInEditMode] = useState(false);
    const [textToImageSettings, setTextToImageSettings] = useLocalStorage<TextToImageSettings>("textToImageSettings", { token: "" });

    return (
        <>
            <PageTitle>Settings</PageTitle>
            <button onClick={() => setIsInEditMode(!isInEditMode)} className="btn btn-primary">
                {isInEditMode ? "Save" : "Edit"}
            </button>
            <Input type="text" id="token" label="Token" value={textToImageSettings.token} onChange={(e) => setTextToImageSettings({ token: e.target.value })} className="mt-3" readOnly={!isInEditMode} />
        </>
    );
};

export default Settings;
