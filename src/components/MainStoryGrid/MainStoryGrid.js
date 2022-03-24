import React from 'react';
import styled from 'styled-components/macro';

import {
    MAIN_STORY,
    OPINION_STORIES,
    SECONDARY_STORIES,
} from '../../data';

import {QUERIES} from "../../constants";

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';

const MainStoryGrid = () => {
    return (
        <Wrapper>
            <MainStorySection>
                <MainStory {...MAIN_STORY} />
            </MainStorySection>

            <SecondaryStorySection>
                <StoryList>
                    {SECONDARY_STORIES.map((story, index) => (
                        <VerticalStoryWrapper key={story.id}>
                            <SecondaryStory {...story} />
                        </VerticalStoryWrapper>
                    ))}
                </StoryList>
            </SecondaryStorySection>

            <OpinionSection>
                <SectionTitle>Opinion</SectionTitle>
                <OpinionStoryList>
                    {OPINION_STORIES.map((story, index) => (
                        <OpinionStoryWrapper key={story.id}  >
                            <OpinionStory {...story} />
                        </OpinionStoryWrapper>
                    ))}
                </OpinionStoryList>
            </OpinionSection>

            <AdvertisementSection>
                <Advertisement />
            </AdvertisementSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
    gap: 48px 0;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
    grid-template-columns: 5fr 4fr 3fr;
    gap: 0;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }

    /*  @media ${QUERIES.laptopAndUp} {
    margin-right: 16px;
    padding-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }*/
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }

    /*  @media ${QUERIES.tabletOnly} {
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid var(--color-gray-300);
  }*/
`;

const VerticalStoryWrapper = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }
`

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;

    &:not(:last-of-type) {
      border-bottom: revert;
      padding-bottom: revert;
      margin-bottom: revert;
    }
  }
`

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
  }
`

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -8px;
  }

    /*  @media ${QUERIES.laptopAndUp} {
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid var(--color-gray-300);
  }*/
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;


  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid var(--color-gray-300);
  }
`;

export default MainStoryGrid;
