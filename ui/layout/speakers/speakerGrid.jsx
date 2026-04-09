import CSS from './speakerGrid.module.css'

export const SpeakerGrid = ({ children }) => {
	if ( !children ) return

	return (
		<div className={CSS.layout}>{ children }</div>
	)
}