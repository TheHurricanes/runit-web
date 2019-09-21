import React, { Component } from 'react'
import { getNewQrCode } from '../../services'
import { getUniqueSession } from '../../services/sessionManage';
import './qrcode.css'

export default class QrCode extends Component {
	state = {
		qrCodeLink: '',
	}

	componentDidMount() {
		if (!this.state.qrCodeLink) {
			this.updateQRcodeOnState();
		}
	}

	generateQRCode = async () => {
		try {
			const session = getUniqueSession()
			const QrCodeLink = await getNewQrCode(session);
			console.log(QrCodeLink.data)
			return QrCodeLink.data
		} catch (error) {
			console.log(error)
			return '';
		}
	}

	updateQRcodeOnState = async () => {
		const link = await this.generateQRCode()
		this.setState({ qrCodeLink: link });
	}

	render() {
		return (
			<div className="qrcode-main_container">
				<p>QRCODE</p>
				<img className="qrcode-image" alt="qr code" src={this.state.qrCodeLink}/>
			</div>
		)
	}
}
