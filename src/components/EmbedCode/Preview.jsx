import CopyButton from '../common/CopyButton';
import ShortCode from './ShortCode';
import Block from './Block';

const Preview = ({ formData, finalString }) => {
  return (
    <div className="relative flex max-w-96 flex-col content-center gap-3 lg:max-w-full">
      <div className=" max-h-[800px] w-full overflow-y-auto rounded-md bg-[#16181E] p-4">
        <Block>
          Download <strong>{formData.title}</strong> PC Game. Here is a direct link to download{' '}
          {formData.title} latest version ({formData.version}) for free. {formData.title} is
          developed by {formData.developerString} and published by {formData.publisherString}.
          It was released on {formData.released} for Windows PC and is considered one of the best in
          the {formData.genres.join(', ')} genre.
        </Block>
        <Block>
          <h2 className="font-bold">Game Info</h2>
          <ul className="mt-2 list-inside list-disc px-4">
            <li>
              <strong>Game Name</strong>: {formData.title}
            </li>
            <li>
              <strong>Released</strong>: {formData.released}
            </li>
            <li>
              <strong>Genre</strong>:{' '}
              {formData.genres.map((genre, index) => (
                <span key={index}>
                  <a href={`https://gamesleech.com/pc-games/${genre.toLowerCase()}/`}>{genre}</a>
                  {index < formData.genres.length - 1 && ', '}
                </span>
              ))}
            </li>

            <li>
              <strong>Publisher</strong>:{' '}
              {formData?.publisherString?.split(', ').map((publisher, index) => (
                <span key={index}>
                  <a href={`https://gamesleech.com/pc-games/${publisher.toLowerCase()}/`}>
                    {publisher}
                  </a>
                  {index < formData.publisherString?.split(', ').length - 1 && ', '}
                </span>
              ))}
            </li>
            <li>
              <strong>Size</strong>: {formData.size}
            </li>
            <li>
              <strong>Repack</strong>:{' '}
              <a href={`https://gamesleech.com/repack/${formData.repack}/`}>{formData.repack}</a>
            </li>
            <li>
              <strong>Available on</strong>:{' '}
              {formData.platforms?.map((platform, index) => (
                <span key={index}>
                  <a href={``}>{platform.name}</a>
                  {index < formData.platforms.length - 1 && ', '}
                </span>
              ))}
            </li>
          </ul>
        </Block>
        <Block>
          <iframe
            src={`${formData.trailerURL}`}
            title="YouTube video player"
            width="800"
            height="450"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Block>
        <h2 className="">
          Download {formData.title} ({formData.version}) for Free
        </h2>

        <Block>
          <div className="">
            <ShortCode>
              <span>[su_accordion]</span>
              <span>
                [su_spoiler class="file-spoiler" title="Download as File" icon="arrow"
                style="fancy"]
              </span>
            </ShortCode>
            <div className="wp-block-buttons">
              <div className="wp-block-button download_file">
                <a
                  className="wp-block-button__link wp-element-button"
                  href="https://drive.google.com/uc?id=1VAWxUzes1-Kthw6IGVyVk1qfg0o4ofWp&amp;export=download"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  Download Zip (7.11GB)
                </a>
              </div>
            </div>
            [/su_spoiler] [su_spoiler class="parts-spoiler" title="Download as Parts"
            icon="folder-1" style="fancy"]
            <div className="wp-block-buttons">
              <div className="wp-block-button download_part">
                <a
                  className="wp-block-button__link wp-element-button"
                  href="https://drive.google.com/uc?id=1d-4OPMc_Zt2roLfrVfFTJ-j_dC2M0Xlv&amp;export=download"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  Download Part1 (2.5GB)
                </a>
              </div>
              <div className="wp-block-button download_part">
                <a
                  className="wp-block-button__link wp-element-button"
                  href="https://drive.google.com/uc?id=1ubl4wwYshKAz2QUdXGWMW0EuvTfBQOox&amp;export=download"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  Download Part2 (2.5GB)
                </a>
              </div>
              <div className="wp-block-button download_part">
                <a
                  className="wp-block-button__link wp-element-button"
                  href="https://drive.google.com/uc?id=1FO6Lz7BmH9wCqGoGpb56uVN1d0WS8_JR&amp;export=download"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  Download Part3 (2.11GB)
                </a>
              </div>
            </div>
            [/su_spoiler] [/su_accordion]
          </div>
        </Block>

        <Block>
          <p className="also_read">
            <a href="https://gamesleech.com/download-installation-guide/">
              How to Download &amp; Install Games from GamesLeech?
            </a>
          </p>
        </Block>
        <ShortCode>
          <span>[su_accordion]</span>
          <span>
            [su_spoiler class="installation-spoiler" title="Installation Guide" icon="plus"
            style="fancy"]
          </span>
        </ShortCode>

        <ul className="wp-block-list list-inside list-disc px-4">
          <li>Download the game (as a file or in parts) from GamesLeech</li>
          <li>
            Disable <strong>Windows Defender</strong> and any <strong>Antivirus</strong> software
          </li>
          <li>
            <strong>If Downloaded as Parts</strong>:
            <ul className="wp-block-list">
              <li>Move all the parts in one folder</li>
              <li>Select all the .rar part files</li>
              <li>Right-click on any part</li>
              <li>
                Click <strong>Extract Here</strong> (use WinRAR or 7-Zip)
              </li>
              <li>
                <em>Go to Step 5 &gt;&gt;</em>
              </li>
            </ul>
          </li>
          <li>
            <strong>If Downloaded as File</strong>
            <ul className="wp-block-list">
              <li>Right-click the .zip file</li>
              <li>
                Click <strong>Extract Here</strong> (use WinRAR or 7-Zip)
              </li>
            </ul>
          </li>
          <li>Open the extracted folder &gt; Look for the .exe file</li>
          <li>
            Right Click on the .exe file &gt; <strong>Run as administrator</strong>
          </li>
          <li>Proceed with the game installation process</li>
          <li>After installation is finished</li>
          <li>Game icon can be found on Desktop</li>
          <li>Double click game icon to start the game.</li>
        </ul>
        <blockquote className="wp-block-quote">
          <p>
            <strong>Note</strong>: Depending on your PC specifications, the installation might
            sometimes take a bit longer. Please wait for the installation to complete or consider
            upgrading your system.
          </p>
        </blockquote>
        <ShortCode>
          <span>[/su_spoiler]</span>
          <span>
            [su_spoiler class="about-spoiler" title="About Game" icon="plus" style="fancy"]
          </span>
        </ShortCode>

        <Block>
          <h2 className="wp-block-heading">Game Description</h2>
          <p>{formData.desc}</p>
        </Block>

        <Block>
          <div className="flex flex-col gap-2">
            <h2 className="wp-block-heading mt-6">System Requirements</h2>
            <ul>
              {Object.keys(formData.systemRequirements).map((requirement, index) => (
                <li key={index}>
                  <strong>{requirement}</strong>: {formData.systemRequirements[requirement]}
                </li>
              ))}
            </ul>
          </div>
        </Block>

        <Block>
          <ShortCode>[/su_spoiler] [/su_accordion]</ShortCode>
        </Block>
      </div>

      <div
        className={`absolute right-0 top-0 mx-5 my-1 cursor-pointer rounded-md text-sm shadow-lg shadow-black/50`}
      >
        <CopyButton contentToCopy={finalString} />
      </div>
    </div>
  );
};

export default Preview;
