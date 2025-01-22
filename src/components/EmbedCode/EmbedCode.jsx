import { useEffect } from 'react';
import useFormStore from '../../stores/formStore';

import Preview from './Preview';
function EmbedCode({}) {
  const formData = useFormStore((state) => state.formData);
  const updateFormData = useFormStore((state) => state.updateFormData);

  const finalString = `<!-- wp:paragraph -->
  <p>Download <strong>${formData.title}</strong> PC Game. Here is a direct link to download ${formData.title} latest version (${formData.version}) for free. ${formData.title} is developed by ${formData.developerString} and published by ${formData.publisherString}. It was released on ${formData.released} for Windows PC and is considered one of the best in the ${formData.genres.join(', ')} genre.</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:heading -->
  <h2 class="wp-block-heading">Game Info</h2>
  <!-- /wp:heading -->
  
  <!-- wp:list -->
  <ul class="wp-block-list"><!-- wp:list-item -->
  <li><strong>Game Name</strong>: ${formData.title}</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>Released</strong>: ${formData.released}</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>Genre</strong>: ${formData.genres.map((genre) => `<a href="https://gamesleech.com/pc-games/${genre.toLowerCase()}/">${genre}</a>`).join(', ')}</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>Publisher</strong>: <a href="">${formData.publisherString}</a></li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>Size</strong>: ${formData.size}</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>Repack</strong>: <a href="https://gamesleech.com/repack/${formData.repack.toLowerCase()}/">${formData.repack}</a></li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>Available on</strong>: ${formData.platforms?.map((platform) => `<a href="">${platform?.name}</a>`).join(', ')}</li>
  <!-- /wp:list-item --></ul>
  <!-- /wp:list -->
  
  <!-- wp:embed {"url":"${formData.trailerURL}","type":"video","providerNameSlug":"youtube","responsive":true,"align":"center","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
  <figure class="wp-block-embed aligncenter is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
  ${formData.trailerURL}
  </div></figure>
  <!-- /wp:embed -->
  
  <!-- wp:heading {"textAlign":"center","className":"dl_head"} -->
  <h2 class="wp-block-heading has-text-align-center dl_head">Download ${formData.title} (${formData.version}) for Free</h2>
  <!-- /wp:heading -->
  
  <!-- wp:group {"className":"dl_grp","layout":{"type":"constrained"}} -->
  <div class="wp-block-group dl_grp"><!-- wp:shortcode -->
  [su_accordion]
  [su_spoiler class="file-spoiler" title="Download as File" icon="arrow" style="fancy"]
  <!-- /wp:shortcode -->
  
  <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
  <div class="wp-block-buttons"><!-- wp:button {"className":"download_file"} -->
  <div class="wp-block-button download_file"><a class="wp-block-button__link wp-element-button" href="#" target="_blank" rel="noreferrer noopener nofollow">Download Zip (${formData.size})</a></div>
  <!-- /wp:button --></div>
  <!-- /wp:buttons -->
  
  <!-- wp:shortcode -->
  [/su_spoiler]
  [su_spoiler class="parts-spoiler" title="Download as Parts" icon="folder-1" style="fancy"]
  <!-- /wp:shortcode -->
  
  <!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center","orientation":"vertical"}} -->
  <div class="wp-block-buttons"><!-- wp:button {"className":"download_part"} -->
  <div class="wp-block-button download_part"><a class="wp-block-button__link wp-element-button" href="#" target="_blank" rel="noreferrer noopener nofollow">Download Part1 (${formData.size})</a></div>
  <!-- /wp:button -->
  
  <!-- wp:button {"className":"download_part"} -->
  <div class="wp-block-button download_part"><a class="wp-block-button__link wp-element-button" href="#" target="_blank" rel="noreferrer noopener nofollow">Download Part2 (${formData.size})</a></div>
  <!-- /wp:button --></div>
  <!-- /wp:buttons -->
  
  <!-- wp:shortcode -->
  [/su_spoiler]
  [/su_accordion]
  <!-- /wp:shortcode --></div>
  <!-- /wp:group -->
  
  <!-- wp:paragraph {"className":"also_read"} -->
  <p class="also_read"><a href="https://gamesleech.com/download-installation-guide/">How to Download & Install Games from GamesLeech?</a></p>
  <!-- /wp:paragraph -->
  
  <!-- wp:shortcode -->
  [su_accordion]
  [su_spoiler class="installation-spoiler" title="Installation Guide" icon="plus" style="fancy"]
  <!-- /wp:shortcode -->
  
  <!-- wp:list {"ordered":true} -->
  <ol class="wp-block-list"><!-- wp:list-item -->
  <li>Download the game (as a file or in parts) from GamesLeech.</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Disable <strong>Windows Defender</strong> and any <strong>Antivirus</strong> software.</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>If Downloaded as Parts</strong>: 
  <ul>
  <li>Move all the parts in one folder.</li>
  <li>Select all the .rar part files.</li>
  <li>Right-click on any part.</li>
  <li>Click <strong>Extract Here</strong> (use WinRAR or 7-Zip).</li>
  <li><em>Go to Step 5 &gt;&gt;</em></li>
  </ul>
  </li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>If Downloaded as File</strong>:
  <ul>
  <li>Right-click the .zip file.</li>
  <li>Click <strong>Extract Here</strong> (use WinRAR or 7-Zip).</li>
  </ul>
  </li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Open the extracted folder &gt; Look for the .exe file.</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Right-click on the .exe file &gt; <strong>Run as administrator</strong>.</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Proceed with the game installation process.</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>After installation is finished.</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Game icon can be found on Desktop.</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li>Double-click game icon to start the game.</li>
  <!-- /wp:list-item --></ol>
  <!-- /wp:list -->
  
  <!-- wp:quote -->
  <blockquote class="wp-block-quote"><p><strong>Note</strong>: Depending on your PC specifications, the installation might sometimes take a bit longer. Please wait for the installation to complete or consider upgrading your system.</p></blockquote>
  <!-- /wp:quote -->
  
  <!-- wp:shortcode -->
  [/su_spoiler]
  [su_spoiler class="about-spoiler" title="About Game" icon="plus" style="fancy"]
  <!-- /wp:shortcode -->
  
  <!-- wp:heading -->
  <h2 class="wp-block-heading">Game Description</h2>
  <!-- /wp:heading -->
  
  <!-- wp:paragraph -->
  <p>${formData.desc || 'No description available.'}</p>
  <!-- /wp:paragraph -->
  
  <!-- wp:heading -->
  <h2 class="wp-block-heading">System Requirements</h2>
  <!-- /wp:heading -->
  
  <!-- wp:list -->
  <ul class="wp-block-list"><!-- wp:list-item -->
  <li><strong>OS</strong>: ${formData.systemRequirements.OS}</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>RAM</strong>: ${formData.systemRequirements.RAM}</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>Storage</strong>: ${formData.systemRequirements.Storage}</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>DirectX</strong>: ${formData.systemRequirements.DirectX}</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>Processor</strong>: ${formData.systemRequirements.Processor}</li>
  <!-- /wp:list-item -->
  
  <!-- wp:list-item -->
  <li><strong>Graphics</strong>: ${formData.systemRequirements.Graphics}</li>
  <!-- /wp:list-item --></ul>
  <!-- /wp:list -->
  
  <!-- wp:shortcode -->
  [/su_spoiler]
  [/su_accordion]
  <!-- /wp:shortcode -->`;

  useEffect(() => {
    updateFormData({ embedCode: finalString });
  }, [finalString]);

  return (
    <>
      <Preview formData={formData} finalString={finalString} />
    </>
  );
}

export default EmbedCode;
