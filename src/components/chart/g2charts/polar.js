import createG2 from 'g2-react';
import React from 'react';

const data = [
  {
    hour: '0',
    page: '/download/radial-progress-source-code',
    views: 9,
  }, {
    hour: '0',
    page: '/d3-mobile-web-application',
    views: 9,
  }, {
    hour: '0',
    page: 'home',
    views: 8,
  }, {
    hour: '0',
    page: '/2015-nfl-predictions',
    views: 8,
  }, {
    hour: '0',
    page: '/data-visualization-open-source',
    views: 4,
  }, {
    hour: '0',
    page: '/download/key-performace-indicators',
    views: 2,
  }, {
    hour: '0',
    page: '/political_influence',
    views: 2,
  }, {
    hour: '0',
    page: '/project-list',
    views: 1,
  }, {
    hour: '0',
    page: '/2013-federal-budget',
    views: 1,
  }, {
    hour: '0',
    page: '/2013-federal-budget?source=d3js',
    views: 1,
  }, {
    hour: '0',
    page: '/download/d3-federal-budget-source-code',
    views: 1,
  }, {
    hour: '0',
    page: '/erp-mockups',
    views: 1,
  }, {
    hour: '1',
    page: '/download/radial-progress-source-code',
    views: 1,
  }, {
    hour: '1',
    page: '/d3-mobile-web-application',
    views: 19,
  }, {
    hour: '1',
    page: 'home',
    views: 19,
  }, {
    hour: '1',
    page: '/2015-nfl-predictions',
    views: 10,
  }, {
    hour: '1',
    page: '/data-visualization-open-source',
    views: 8,
  }, {
    hour: '1',
    page: '/download/key-performace-indicators',
    views: 6,
  }, {
    hour: '1',
    page: '/political_influence',
    views: 5,
  }, {
    hour: '1',
    page: '/project-list',
    views: 5,
  }, {
    hour: '1',
    page: '/2013-federal-budget',
    views: 4,
  }, {
    hour: '1',
    page: '/2013-federal-budget?source=d3js',
    views: 4,
  }, {
    hour: '1',
    page: '/download/d3-federal-budget-source-code',
    views: 3,
  }, {
    hour: '1',
    page: '/erp-mockups',
    views: 3,
  }, {
    hour: '2',
    page: '/download/radial-progress-source-code',
    views: 2,
  }, {
    hour: '2',
    page: '/d3-mobile-web-application',
    views: 1,
  }, {
    hour: '2',
    page: 'home',
    views: 1,
  }, {
    hour: '2',
    page: '/2015-nfl-predictions',
    views: 1,
  }, {
    hour: '2',
    page: '/data-visualization-open-source',
    views: 1,
  }, {
    hour: '2',
    page: '/download/key-performace-indicators',
    views: 1,
  }, {
    hour: '2',
    page: '/political_influence',
    views: 17,
  }, {
    hour: '2',
    page: '/project-list',
    views: 15,
  }, {
    hour: '2',
    page: '/2013-federal-budget',
    views: 14,
  }, {
    hour: '2',
    page: '/2013-federal-budget?source=d3js',
    views: 9,
  }, {
    hour: '2',
    page: '/download/d3-federal-budget-source-code',
    views: 8,
  }, {
    hour: '2',
    page: '/erp-mockups',
    views: 5,
  }, {
    hour: '3',
    page: '/download/radial-progress-source-code',
    views: 4,
  }, {
    hour: '3',
    page: '/d3-mobile-web-application',
    views: 4,
  }, {
    hour: '3',
    page: 'home',
    views: 4,
  }, {
    hour: '3',
    page: '/2015-nfl-predictions',
    views: 3,
  }, {
    hour: '3',
    page: '/data-visualization-open-source',
    views: 2,
  }, {
    hour: '3',
    page: '/download/key-performace-indicators',
    views: 1,
  }, {
    hour: '3',
    page: '/political_influence',
    views: 1,
  }, {
    hour: '3',
    page: '/project-list',
    views: 1,
  }, {
    hour: '3',
    page: '/2013-federal-budget',
    views: 1,
  }, {
    hour: '3',
    page: '/2013-federal-budget?source=d3js',
    views: 1,
  }, {
    hour: '3',
    page: '/download/d3-federal-budget-source-code',
    views: 1,
  }, {
    hour: '3',
    page: '/erp-mockups',
    views: 1,
  }, {
    hour: '4',
    page: '/download/radial-progress-source-code',
    views: 1,
  }, {
    hour: '4',
    page: '/d3-mobile-web-application',
    views: 1,
  }, {
    hour: '4',
    page: 'home',
    views: 13,
  }, {
    hour: '4',
    page: '/2015-nfl-predictions',
    views: 12,
  }, {
    hour: '4',
    page: '/data-visualization-open-source',
    views: 7,
  }, {
    hour: '4',
    page: '/download/key-performace-indicators',
    views: 6,
  }, {
    hour: '4',
    page: '/political_influence',
    views: 5,
  }, {
    hour: '4',
    page: '/project-list',
    views: 5,
  }, {
    hour: '4',
    page: '/2013-federal-budget',
    views: 2,
  }, {
    hour: '4',
    page: '/2013-federal-budget?source=d3js',
    views: 2,
  }, {
    hour: '4',
    page: '/download/d3-federal-budget-source-code',
    views: 2,
  }, {
    hour: '4',
    page: '/erp-mockups',
    views: 1,
  }, {
    hour: '5',
    page: '/download/radial-progress-source-code',
    views: 1,
  }, {
    hour: '5',
    page: '/d3-mobile-web-application',
    views: 1,
  }, {
    hour: '5',
    page: 'home',
    views: 1,
  }, {
    hour: '5',
    page: '/2015-nfl-predictions',
    views: 1,
  }, {
    hour: '5',
    page: '/data-visualization-open-source',
    views: 1,
  }, {
    hour: '5',
    page: '/download/key-performace-indicators',
    views: 1,
  }, {
    hour: '5',
    page: '/political_influence',
    views: 12,
  }, {
    hour: '5',
    page: '/project-list',
    views: 15,
  }, {
    hour: '5',
    page: '/2013-federal-budget',
    views: 9,
  }, {
    hour: '5',
    page: '/2013-federal-budget?source=d3js',
    views: 8,
  }, {
    hour: '5',
    page: '/download/d3-federal-budget-source-code',
    views: 6,
  }, {
    hour: '5',
    page: '/erp-mockups',
    views: 4,
  }, {
    hour: '6',
    page: '/download/radial-progress-source-code',
    views: 3,
  }, {
    hour: '6',
    page: '/d3-mobile-web-application',
    views: 3,
  }, {
    hour: '6',
    page: 'home',
    views: 2,
  }, {
    hour: '6',
    page: '/2015-nfl-predictions',
    views: 2,
  }, {
    hour: '6',
    page: '/data-visualization-open-source',
    views: 1,
  }, {
    hour: '6',
    page: '/download/key-performace-indicators',
    views: 1,
  }, {
    hour: '6',
    page: '/political_influence',
    views: 1,
  }, {
    hour: '6',
    page: '/project-list',
    views: 1,
  }, {
    hour: '6',
    page: '/2013-federal-budget',
    views: 8,
  }, {
    hour: '6',
    page: '/2013-federal-budget?source=d3js',
    views: 15,
  }, {
    hour: '6',
    page: '/download/d3-federal-budget-source-code',
    views: 19,
  }, {
    hour: '6',
    page: '/erp-mockups',
    views: 13,
  }, {
    hour: '7',
    page: '/download/radial-progress-source-code',
    views: 7,
  }, {
    hour: '7',
    page: '/d3-mobile-web-application',
    views: 7,
  }, {
    hour: '7',
    page: 'home',
    views: 3,
  }, {
    hour: '7',
    page: '/2015-nfl-predictions',
    views: 3,
  }, {
    hour: '7',
    page: '/data-visualization-open-source',
    views: 3,
  }, {
    hour: '7',
    page: '/download/key-performace-indicators',
    views: 2,
  }, {
    hour: '7',
    page: '/political_influence',
    views: 1,
  }, {
    hour: '7',
    page: '/project-list',
    views: 1,
  }, {
    hour: '7',
    page: '/2013-federal-budget',
    views: 1,
  }, {
    hour: '7',
    page: '/2013-federal-budget?source=d3js',
    views: 1,
  }, {
    hour: '7',
    page: '/download/d3-federal-budget-source-code',
    views: 1,
  }, {
    hour: '7',
    page: '/erp-mockups',
    views: 1,
  }, {
    hour: '8',
    page: '/download/radial-progress-source-code',
    views: 11,
  }, {
    hour: '8',
    page: '/d3-mobile-web-application',
    views: 8,
  }, {
    hour: '8',
    page: 'home',
    views: 16,
  }, {
    hour: '8',
    page: '/2015-nfl-predictions',
    views: 11,
  }, {
    hour: '8',
    page: '/data-visualization-open-source',
    views: 10,
  }, {
    hour: '8',
    page: '/download/key-performace-indicators',
    views: 9,
  }, {
    hour: '8',
    page: '/political_influence',
    views: 7,
  }, {
    hour: '8',
    page: '/project-list',
    views: 7,
  }, {
    hour: '8',
    page: '/2013-federal-budget',
    views: 6,
  }, {
    hour: '8',
    page: '/2013-federal-budget?source=d3js',
    views: 5,
  }, {
    hour: '8',
    page: '/download/d3-federal-budget-source-code',
    views: 5,
  }, {
    hour: '8',
    page: '/erp-mockups',
    views: 3,
  }, {
    hour: '9',
    page: '/download/radial-progress-source-code',
    views: 3,
  }, {
    hour: '9',
    page: '/d3-mobile-web-application',
    views: 2,
  }, {
    hour: '9',
    page: 'home',
    views: 2,
  }, {
    hour: '9',
    page: '/2015-nfl-predictions',
    views: 2,
  }, {
    hour: '9',
    page: '/data-visualization-open-source',
    views: 1,
  }, {
    hour: '9',
    page: '/download/key-performace-indicators',
    views: 1,
  }, {
    hour: '9',
    page: '/political_influence',
    views: 1,
  }, {
    hour: '9',
    page: '/project-list',
    views: 1,
  }, {
    hour: '9',
    page: '/2013-federal-budget',
    views: 1,
  }, {
    hour: '9',
    page: '/2013-federal-budget?source=d3js',
    views: 10,
  }, {
    hour: '9',
    page: '/download/d3-federal-budget-source-code',
    views: 3,
  }, {
    hour: '9',
    page: '/erp-mockups',
    views: 16,
  }, {
    hour: '10',
    page: '/download/radial-progress-source-code',
    views: 12,
  }, {
    hour: '10',
    page: '/d3-mobile-web-application',
    views: 11,
  }, {
    hour: '10',
    page: 'home',
    views: 8,
  }, {
    hour: '10',
    page: '/2015-nfl-predictions',
    views: 7,
  }, {
    hour: '10',
    page: '/data-visualization-open-source',
    views: 5,
  }, {
    hour: '10',
    page: '/download/key-performace-indicators',
    views: 4,
  }, {
    hour: '10',
    page: '/political_influence',
    views: 3,
  }, {
    hour: '10',
    page: '/project-list',
    views: 2,
  }, {
    hour: '10',
    page: '/2013-federal-budget',
    views: 2,
  }, {
    hour: '10',
    page: '/2013-federal-budget?source=d3js',
    views: 2,
  }, {
    hour: '10',
    page: '/download/d3-federal-budget-source-code',
    views: 2,
  }, {
    hour: '10',
    page: '/erp-mockups',
    views: 1,
  }, {
    hour: '11',
    page: '/download/radial-progress-source-code',
    views: 1,
  }, {
    hour: '11',
    page: '/d3-mobile-web-application',
    views: 1,
  }, {
    hour: '11',
    page: 'home',
    views: 1,
  }, {
    hour: '11',
    page: '/2015-nfl-predictions',
    views: 1,
  }, {
    hour: '11',
    page: '/data-visualization-open-source',
    views: 1,
  }, {
    hour: '11',
    page: '/download/key-performace-indicators',
    views: 3,
  }, {
    hour: '11',
    page: '/political_influence',
    views: 15,
  }, {
    hour: '11',
    page: '/project-list',
    views: 9,
  }, {
    hour: '11',
    page: '/2013-federal-budget',
    views: 8,
  }, {
    hour: '11',
    page: '/2013-federal-budget?source=d3js',
    views: 8,
  }, {
    hour: '11',
    page: '/download/d3-federal-budget-source-code',
    views: 6,
  }, {
    hour: '11',
    page: '/erp-mockups',
    views: 6,
  }, {
    hour: '12',
    page: '/download/radial-progress-source-code',
    views: 5,
  }, {
    hour: '12',
    page: '/d3-mobile-web-application',
    views: 3,
  }, {
    hour: '12',
    page: 'home',
    views: 2,
  }, {
    hour: '12',
    page: '/2015-nfl-predictions',
    views: 2,
  }, {
    hour: '12',
    page: '/data-visualization-open-source',
    views: 2,
  }, {
    hour: '12',
    page: '/download/key-performace-indicators',
    views: 1,
  }, {
    hour: '12',
    page: '/political_influence',
    views: 1,
  }, {
    hour: '12',
    page: '/project-list',
    views: 1,
  }, {
    hour: '12',
    page: '/2013-federal-budget',
    views: 1,
  }, {
    hour: '12',
    page: '/2013-federal-budget?source=d3js',
    views: 1,
  }, {
    hour: '12',
    page: '/download/d3-federal-budget-source-code',
    views: 3,
  }, {
    hour: '12',
    page: '/erp-mockups',
    views: 12,
  }, {
    hour: '13',
    page: '/download/radial-progress-source-code',
    views: 11,
  }, {
    hour: '13',
    page: '/d3-mobile-web-application',
    views: 7,
  }, {
    hour: '13',
    page: 'home',
    views: 5,
  }, {
    hour: '13',
    page: '/2015-nfl-predictions',
    views: 5,
  }, {
    hour: '13',
    page: '/data-visualization-open-source',
    views: 4,
  }, {
    hour: '13',
    page: '/download/key-performace-indicators',
    views: 4,
  }, {
    hour: '13',
    page: '/political_influence',
    views: 3,
  }, {
    hour: '13',
    page: '/project-list',
    views: 2,
  }, {
    hour: '13',
    page: '/2013-federal-budget',
    views: 2,
  }, {
    hour: '13',
    page: '/2013-federal-budget?source=d3js',
    views: 2,
  }, {
    hour: '13',
    page: '/download/d3-federal-budget-source-code',
    views: 2,
  }, {
    hour: '13',
    page: '/erp-mockups',
    views: 1,
  }, {
    hour: '14',
    page: '/download/radial-progress-source-code',
    views: 1,
  }, {
    hour: '14',
    page: '/d3-mobile-web-application',
    views: 1,
  }, {
    hour: '14',
    page: 'home',
    views: 11,
  }, {
    hour: '14',
    page: '/2015-nfl-predictions',
    views: 10,
  }, {
    hour: '14',
    page: '/data-visualization-open-source',
    views: 6,
  }, {
    hour: '14',
    page: '/download/key-performace-indicators',
    views: 5,
  }, {
    hour: '14',
    page: '/political_influence',
    views: 4,
  }, {
    hour: '14',
    page: '/project-list',
    views: 4,
  }, {
    hour: '14',
    page: '/2013-federal-budget',
    views: 4,
  }, {
    hour: '14',
    page: '/2013-federal-budget?source=d3js',
    views: 4,
  }, {
    hour: '14',
    page: '/download/d3-federal-budget-source-code',
    views: 2,
  }, {
    hour: '14',
    page: '/erp-mockups',
    views: 2,
  }, {
    hour: '15',
    page: '/download/radial-progress-source-code',
    views: 2,
  }, {
    hour: '15',
    page: '/d3-mobile-web-application',
    views: 2,
  }, {
    hour: '15',
    page: 'home',
    views: 2,
  }, {
    hour: '15',
    page: '/2015-nfl-predictions',
    views: 1,
  }, {
    hour: '15',
    page: '/data-visualization-open-source',
    views: 1,
  }, {
    hour: '15',
    page: '/download/key-performace-indicators',
    views: 1,
  }, {
    hour: '15',
    page: '/political_influence',
    views: 1,
  }, {
    hour: '15',
    page: '/project-list',
    views: 1,
  }, {
    hour: '15',
    page: '/2013-federal-budget',
    views: 1,
  }, {
    hour: '15',
    page: '/2013-federal-budget?source=d3js',
    views: 1,
  }, {
    hour: '15',
    page: '/download/d3-federal-budget-source-code',
    views: 1,
  }, {
    hour: '15',
    page: '/erp-mockups',
    views: 12,
  }, {
    hour: '16',
    page: '/download/radial-progress-source-code',
    views: 10,
  }, {
    hour: '16',
    page: '/d3-mobile-web-application',
    views: 9,
  }, {
    hour: '16',
    page: 'home',
    views: 7,
  }, {
    hour: '16',
    page: '/2015-nfl-predictions',
    views: 6,
  }, {
    hour: '16',
    page: '/data-visualization-open-source',
    views: 4,
  }, {
    hour: '16',
    page: '/download/key-performace-indicators',
    views: 4,
  }, {
    hour: '16',
    page: '/political_influence',
    views: 4,
  }, {
    hour: '16',
    page: '/project-list',
    views: 3,
  }, {
    hour: '16',
    page: '/2013-federal-budget',
    views: 2,
  }, {
    hour: '16',
    page: '/2013-federal-budget?source=d3js',
    views: 2,
  }, {
    hour: '16',
    page: '/download/d3-federal-budget-source-code',
    views: 2,
  }, {
    hour: '16',
    page: '/erp-mockups',
    views: 2,
  }, {
    hour: '17',
    page: '/download/radial-progress-source-code',
    views: 1,
  }, {
    hour: '17',
    page: '/d3-mobile-web-application',
    views: 1,
  }, {
    hour: '17',
    page: 'home',
    views: 1,
  }, {
    hour: '17',
    page: '/2015-nfl-predictions',
    views: 1,
  }, {
    hour: '17',
    page: '/data-visualization-open-source',
    views: 3,
  }, {
    hour: '17',
    page: '/download/key-performace-indicators',
    views: 12,
  }, {
    hour: '17',
    page: '/political_influence',
    views: 12,
  }, {
    hour: '17',
    page: '/project-list',
    views: 10,
  }, {
    hour: '17',
    page: '/2013-federal-budget',
    views: 9,
  }, {
    hour: '17',
    page: '/2013-federal-budget?source=d3js',
    views: 9,
  }, {
    hour: '17',
    page: '/download/d3-federal-budget-source-code',
    views: 4,
  }, {
    hour: '17',
    page: '/erp-mockups',
    views: 3,
  }, {
    hour: '18',
    page: '/download/radial-progress-source-code',
    views: 3,
  }, {
    hour: '18',
    page: '/d3-mobile-web-application',
    views: 2,
  }, {
    hour: '18',
    page: 'home',
    views: 1,
  }, {
    hour: '18',
    page: '/2015-nfl-predictions',
    views: 1,
  }, {
    hour: '18',
    page: '/data-visualization-open-source',
    views: 1,
  }, {
    hour: '18',
    page: '/download/key-performace-indicators',
    views: 1,
  }, {
    hour: '18',
    page: '/political_influence',
    views: 1,
  }, {
    hour: '18',
    page: '/project-list',
    views: 1,
  }, {
    hour: '18',
    page: '/2013-federal-budget',
    views: 1,
  }, {
    hour: '18',
    page: '/2013-federal-budget?source=d3js',
    views: 1,
  }, {
    hour: '18',
    page: '/download/d3-federal-budget-source-code',
    views: 1,
  }, {
    hour: '18',
    page: '/erp-mockups',
    views: 15,
  }, {
    hour: '19',
    page: '/download/radial-progress-source-code',
    views: 11,
  }, {
    hour: '19',
    page: '/d3-mobile-web-application',
    views: 9,
  }, {
    hour: '19',
    page: 'home',
    views: 7,
  }, {
    hour: '19',
    page: '/2015-nfl-predictions',
    views: 7,
  }, {
    hour: '19',
    page: '/data-visualization-open-source',
    views: 6,
  }, {
    hour: '19',
    page: '/download/key-performace-indicators',
    views: 2,
  }, {
    hour: '19',
    page: '/political_influence',
    views: 1,
  }, {
    hour: '19',
    page: '/project-list',
    views: 1,
  }, {
    hour: '19',
    page: '/2013-federal-budget',
    views: 1,
  }, {
    hour: '19',
    page: '/2013-federal-budget?source=d3js',
    views: 1,
  }, {
    hour: '19',
    page: '/download/d3-federal-budget-source-code',
    views: 1,
  }, {
    hour: '19',
    page: '/erp-mockups',
    views: 18,
  }, {
    hour: '20',
    page: '/download/radial-progress-source-code',
    views: 14,
  }, {
    hour: '20',
    page: '/d3-mobile-web-application',
    views: 11,
  }, {
    hour: '20',
    page: 'home',
    views: 10,
  }, {
    hour: '20',
    page: '/2015-nfl-predictions',
    views: 4,
  }, {
    hour: '20',
    page: '/data-visualization-open-source',
    views: 4,
  }, {
    hour: '20',
    page: '/download/key-performace-indicators',
    views: 4,
  }, {
    hour: '20',
    page: '/political_influence',
    views: 2,
  }, {
    hour: '20',
    page: '/project-list',
    views: 2,
  }, {
    hour: '20',
    page: '/2013-federal-budget',
    views: 2,
  }, {
    hour: '20',
    page: '/2013-federal-budget?source=d3js',
    views: 2,
  }, {
    hour: '20',
    page: '/download/d3-federal-budget-source-code',
    views: 1,
  }, {
    hour: '20',
    page: '/erp-mockups',
    views: 1,
  }, {
    hour: '21',
    page: '/download/radial-progress-source-code',
    views: 1,
  }, {
    hour: '21',
    page: '/d3-mobile-web-application',
    views: 1,
  }, {
    hour: '21',
    page: 'home',
    views: 16,
  }, {
    hour: '21',
    page: '/2015-nfl-predictions',
    views: 10,
  }, {
    hour: '21',
    page: '/data-visualization-open-source',
    views: 6,
  }, {
    hour: '21',
    page: '/download/key-performace-indicators',
    views: 4,
  }, {
    hour: '21',
    page: '/political_influence',
    views: 3,
  }, {
    hour: '21',
    page: '/project-list',
    views: 3,
  }, {
    hour: '21',
    page: '/2013-federal-budget',
    views: 3,
  }, {
    hour: '21',
    page: '/2013-federal-budget?source=d3js',
    views: 1,
  }, {
    hour: '21',
    page: '/download/d3-federal-budget-source-code',
    views: 1,
  }, {
    hour: '21',
    page: '/erp-mockups',
    views: 1,
  }, {
    hour: '22',
    page: '/download/radial-progress-source-code',
    views: 1,
  }, {
    hour: '22',
    page: '/d3-mobile-web-application',
    views: 1,
  }, {
    hour: '22',
    page: 'home',
    views: 1,
  }, {
    hour: '22',
    page: '/2015-nfl-predictions',
    views: 1,
  }, {
    hour: '22',
    page: '/data-visualization-open-source',
    views: 8,
  }, {
    hour: '22',
    page: '/download/key-performace-indicators',
    views: 8,
  }, {
    hour: '22',
    page: '/political_influence',
    views: 8,
  }, {
    hour: '22',
    page: '/project-list',
    views: 6,
  }, {
    hour: '22',
    page: '/2013-federal-budget',
    views: 4,
  }, {
    hour: '22',
    page: '/2013-federal-budget?source=d3js',
    views: 4,
  }, {
    hour: '22',
    page: '/download/d3-federal-budget-source-code',
    views: 3,
  }, {
    hour: '22',
    page: '/erp-mockups',
    views: 3,
  }, {
    hour: '23',
    page: '/download/radial-progress-source-code',
    views: 3,
  }, {
    hour: '23',
    page: '/d3-mobile-web-application',
    views: 2,
  }, {
    hour: '23',
    page: 'home',
    views: 2,
  }, {
    hour: '23',
    page: '/2015-nfl-predictions',
    views: 1,
  }, {
    hour: '23',
    page: '/data-visualization-open-source',
    views: 1,
  }, {
    hour: '23',
    page: '/download/key-performace-indicators',
    views: 1,
  }, {
    hour: '23',
    page: '/political_influence',
    views: 1,
  }, {
    hour: '23',
    page: '/project-list',
    views: 1,
  }, {
    hour: '23',
    page: '/2013-federal-budget',
    views: 11,
  }, {
    hour: '23',
    page: '/2013-federal-budget?source=d3js',
    views: 5,
  }, {
    hour: '23',
    page: '/download/d3-federal-budget-source-code',
    views: 4,
  }, {
    hour: '23',
    page: '/erp-mockups',
    views: 3,
  },
];

const Polar = createG2((chart) => {
  chart.source(data, {
    views: {
      max: 25,
      min: 0,
      nice: false,
    },
    hour: {
      ticks: [
        '0',
        '3',
        '6',
        '9',
        '12',
        '15',
        '18',
        '21',
      ],
    },
  });
  chart.coord('polar', {inner: 0.35});
  chart.axis('hour', {
    grid: null,
    formatter(val) {
      if (val * 1 >= 12) {
        return `${val} pm`;
      }
      return `${val} am`;
    },
  });
  chart.axis('views', {
    tickLine: null,
    line: null,
    grid: {
      line: {
        lineDash: [0, 0],
      },
    },
  });
  chart.legend(false);
  chart
    .area()
    .position('hour*views')
    .color('page', ['#cd57a4', '#b236a3', '#fa6f7f', '#fa7c3b', '#e96b6b'])
    .shape('smooth')
    .opacity(0.15);
  chart.render();
});
const MyComponent = React.createClass({
  getInitialState() {
    return {
      data,
      forceFit: true,
      width: 500,
      height: 500,
      plotCfg: {
        margin: [50, 50, 100, 50],
      },
    };
  },
  render() {
    return (
      <div>
        <Polar
          data={this.state.data}
          width={this.state.width}
          height={this.state.height}
          forceFit={this.state.forceFit}
          plotCfg={this.state.plotCfg}
        />
      </div>
    );
  },
});

export default MyComponent;
