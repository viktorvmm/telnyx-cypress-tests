import { assistantPage } from '../support/page_objects/assistantPage';

describe('Select role and persona, then start assistant', () => {
  it('selects Support Specialist and Nova, then clicks Let’s Talk', () => {
    assistantPage.visit();
    assistantPage.closeCookiesBanner();

    assistantPage.selectRole('support-specialist');
    assistantPage.selectPersona('nova');
    assistantPage.clickLetsTalk();

    assistantPage.waitForVideoToPlay();

    assistantPage.checkCallInProgressHeader();
    assistantPage.checkExplanationText();
    assistantPage.checkAudioAutoplay();

    assistantPage.clickEndCall();
    assistantPage.checkCallEnded();
  });
});
