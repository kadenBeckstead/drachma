import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProgressService {
    constructor() {}

    video = 'ondemand_video';
    article = 'description';

    investments = {
        beginner: [
            { section: '1.1', title: 'Different Types of Investments', image: this.video, selected: true },
            { section: '1.2', title: 'How Does the Stock Market Work?', image: this.article, selected: true },
            { section: '1.3', title: 'Buy Low, Sell High', image: this.video, selected: true },
            { section: '1.4', title: 'What are Dividends', image: this.article, selected: false },
            { section: '1.5', title: 'Choosing a Stock Broker', image: this.article, selected: false },
        ],
        intermediate: [
            { section: '2.1', title: 'Buy and Hold Strategy', image: this.video, selected: false },
            { section: '2.2', title: 'Understanding Market Risk', image: this.article, selected: false },
            { section: '2.3', title: 'The Value of Diversification', image: this.video, selected: false },
            { section: '2.4', title: 'Generation of Wealth Over Time', image: this.article, selected: false },
            { section: '2.5', title: 'Over-Valued or Under-Valued?', image: this.article, selected: false },
        ],
        advanced: [
            { section: '3.1', title: 'Introduction to Stock Options', image: this.video, selected: false },
            { section: '3.2', title: 'Bollinger Bands - Valuation', image: this.article, selected: false },
            { section: '3.3', title: 'Mitigating Risk With Inverse Funds', image: this.video, selected: false },
            { section: '3.4', title: 'Strategies for the Bear Market', image: this.article, selected: false },
            { section: '3.5', title: 'Call and Put Options', image: this.article, selected: false },
        ],
    };

    getInvestmentsCount() {
        let selected = 0;
        let total = 0;
        this.investments.beginner.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        this.investments.intermediate.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        this.investments.advanced.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        return Number(((selected / total) * 100).toFixed(2));
    }

    taxes = {
        beginner: [
            { section: '1.1', title: 'Commmon Tax Forms', image: this.video, selected: true },
            { section: '1.2', title: 'The 1098T', image: this.article, selected: true },
            { section: '1.3', title: 'Filling out a W2', image: this.video, selected: true },
            { section: '1.4', title: 'Student Aid and Taxes', image: this.article, selected: true },
        ],
        intermediate: [
            { section: '2.1', title: "How to Know What You're Responsible For", image: this.video, selected: true },
            { section: '2.2', title: 'Filing Jointly', image: this.article, selected: true },
            { section: '2.3', title: 'Calculating Liabilities', image: this.video, selected: true },
            { section: '2.4', title: 'Write-offs', image: this.article, selected: true },
        ],
        advanced: [
            { section: '3.1', title: 'Child Tax Credits', image: this.video, selected: true },
            { section: '3.2', title: 'First Time Home Buyer Credits', image: this.article, selected: false },
            { section: '3.3', title: 'Charitable Contributions', image: this.video, selected: false },
        ],
    };

    getTaxesCount() {
        let selected = 0;
        let total = 0;
        this.taxes.beginner.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        this.taxes.intermediate.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        this.taxes.advanced.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        return Number(((selected / total) * 100).toFixed(2));
    }

    insurance = {
        beginner: [
            { section: '1.1', title: 'Why Should I Have Insurance', image: this.video, selected: true },
            { section: '1.2', title: 'How Does Insurance Protect Me', image: this.article, selected: false },
            { section: '1.3', title: 'Premiums and Deductibles', image: this.video, selected: false },
            { section: '1.4', title: 'What is a Claim?', image: this.article, selected: false },
            { section: '1.5', title: 'Selecting a Policy', image: this.article, selected: false },
        ],
        intermediate: [
            { section: '2.1', title: 'Insurance Adjustments', image: this.video, selected: false },
            { section: '2.2', title: 'How Much Is Too Much?', image: this.article, selected: false },
            { section: '2.3', title: 'Auto Insurance', image: this.video, selected: false },
            { section: '2.4', title: 'Life Insurance', image: this.article, selected: false },
            { section: '2.5', title: 'Health Insurance', image: this.article, selected: false },
        ],
        advanced: [
            { section: '3.1', title: 'What To Do When You Are In An Accident', image: this.video, selected: false },
            { section: '3.2', title: 'Changing Providers', image: this.article, selected: false },
            { section: '3.3', title: 'Whole Term vs. Term Life Insurance', image: this.video, selected: false },
        ],
    };

    getInsuranceCount() {
        let selected = 0;
        let total = 0;
        this.insurance.beginner.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        this.insurance.intermediate.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        this.insurance.advanced.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        return Number(((selected / total) * 100).toFixed(2));
    }

    home = {
        beginner: [
            { section: '1.1', title: 'Breakdown of Costs', image: this.video, selected: true },
            { section: '1.2', title: 'Importance of Prudence', image: this.article, selected: true },
            { section: '1.3', title: 'How to Start Shopping', image: this.video, selected: false },
            { section: '1.4', title: 'Finding a Realtor', image: this.article, selected: false },
        ],
        intermediate: [
            { section: '2.1', title: 'Hidden Costs', image: this.video, selected: false },
            { section: '2.2', title: 'Interest Rates', image: this.article, selected: false },
            { section: '2.3', title: 'Getting a Loan', image: this.video, selected: false },
            { section: '2.4', title: '"Piti" Payment', image: this.article, selected: false },
            { section: '2.5', title: 'Understanding Risks', image: this.article, selected: false },
        ],
        advanced: [
            { section: '3.1', title: 'Amortization', image: this.video, selected: false },
            { section: '3.2', title: 'Opportunity Zones', image: this.article, selected: false },
            { section: '3.3', title: 'Tax Credits and Write-offs', image: this.video, selected: false },
            { section: '3.4', title: 'Fluctuations of the Housing Market', image: this.article, selected: false },
            { section: '3.5', title: 'Understanding the 2008 Housing Crisis', image: this.article, selected: false },
        ],
    };

    getHomeCount() {
        let selected = 0;
        let total = 0;
        this.home.beginner.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        this.home.intermediate.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        this.home.advanced.forEach((item) => {
            ++total;
            if (item.selected) {
                ++selected;
            }
        });
        return Number(((selected / total) * 100).toFixed(2));
    }

    getRank(percent) {
        if (percent <= 33) {
            return 'Beginner';
        }
        if (percent <= 66) {
            return 'Intermediate';
        }
        return 'Advanced';
    }
}
