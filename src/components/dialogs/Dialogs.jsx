import React from "react";
import PersonIcon from '@material-ui/icons/Person';

export default class Dialogs extends React.Component {
    render() {
        return (
            <div className="dialogs">
                <div className="dialogs__items">
                    <div className="dialogs__item">
                        <div className="dialogs__img">
                            <PersonIcon style={{color: "white"}}/>
                        </div>
                        <span className="dialogs__name">Yura</span>
                    </div>
                    <div className="dialogs__item">
                        <div className="dialogs__img">
                            <PersonIcon style={{color: "white"}}/>
                        </div>
                        <span className="dialogs__name">Misha</span>
                    </div>
                    <div className="dialogs__item">
                        <div className="dialogs__img">
                            <PersonIcon style={{color: "white"}}/>
                        </div>
                        <span className="dialogs__name">Andrey</span>
                    </div>
                    <div className="dialogs__item">
                        <div className="dialogs__img">
                            <PersonIcon style={{color: "white"}}/>
                        </div>
                        <span className="dialogs__name">Maxim</span>
                    </div>
                    <div className="dialogs__item">
                        <div className="dialogs__img">
                            <PersonIcon style={{color: "white"}}/>
                        </div>
                        <span className="dialogs__name">Lesha</span>
                    </div>


                </div>
            </div>
        )
    }
}
