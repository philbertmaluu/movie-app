/* eslint-disable react/prop-types */
export default function DownloadMovie({ magnetLink }) {
    return (
        <div className="download-movie">
            <a
                className="torrent-download"
                href={magnetLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="icon">
                    <i className="flaticon-download-icon"></i>
                </span>
                Download
            </a>
        </div>
    );
}
