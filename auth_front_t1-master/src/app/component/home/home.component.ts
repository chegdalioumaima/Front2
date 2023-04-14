import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isFilterVisible = true;
  isFiltersTabsVisible = false;

  showedFilterTabs = {
    base: true,
    profissional: false,
    formation: false,
    auther: false,
  }

  perPage = 10;
  perPageOptions = [10, 20, 50, 100];

  currentPage = 1;
  totalOfPages = 10;

  data = [
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Employé",
        color: "secondary"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: 'Débutant',
        color: 'warning'
      },
      typeContrat: "CDI",
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Qualifié",
        color: "primary"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: "Expert",
        color: "success"
      },
      typeContrat: "CTT",
    },
    {
      id: 3,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Ux Designer",
        color: "warning"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: 'Debutant',
        color: 'warning'
      },
      typeContrat: "TPP",
    },
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Employé",
        color: "secondary"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: 'Débutant',
        color: 'warning'
      },
      typeContrat: "CDI",
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Qualifié",
        color: "primary"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: "Expert",
        color: "success"
      },
      typeContrat: "CTT",
    },
    {
      id: 3,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Ux Designer",
        color: "warning"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: 'Debutant',
        color: 'warning'
      },
      typeContrat: "TPP",
    },
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Employé",
        color: "secondary"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: 'Débutant',
        color: 'warning'
      },
      typeContrat: "CDI",
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Qualifié",
        color: "primary"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: "Expert",
        color: "success"
      },
      typeContrat: "CTT",
    },
    {
      id: 3,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Ux Designer",
        color: "warning"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: 'Debutant',
        color: 'warning'
      },
      typeContrat: "TPP",
    },
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Employé",
        color: "secondary"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: 'Débutant',
        color: 'warning'
      },
      typeContrat: "CDI",
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Qualifié",
        color: "primary"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: "Expert",
        color: "success"
      },
      typeContrat: "CTT",
    },
    {
      id: 3,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Ux Designer",
        color: "warning"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: 'Debutant',
        color: 'warning'
      },
      typeContrat: "TPP",
    },
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Employé",
        color: "secondary"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: 'Débutant',
        color: 'warning'
      },
      typeContrat: "CDI",
    },
    {
      id: 2,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Qualifié",
        color: "primary"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: "Expert",
        color: "success"
      },
      typeContrat: "CTT",
    },
    {
      id: 3,
      first_name: "John",
      last_name: "Doe",
      function: "CEO",
      statusCondidat: {
        name: "Ux Designer",
        color: "warning"
      },
      years_of_experience: 10,
      niveauxExperience: {
        name: 'Debutant',
        color: 'warning'
      },
      typeContrat: "TPP",
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleShowedFilterTabs(tabName: string) {
    this.showedFilterTabs = {
      base: false,
      profissional: false,
      formation: false,
      auther: false,
    }

    if (tabName === 'base') {
      this.showedFilterTabs.base = true;
    }
    if (tabName === 'profissional') {
      this.showedFilterTabs.profissional = true;
    }
    if (tabName === 'formation') {
      this.showedFilterTabs.formation = true;
    }
    if (tabName === 'auther') {
      this.showedFilterTabs.auther = true;
    }

  }

  getData() {

    this.totalOfPages = Math.ceil(this.data.length / this.perPage);

    if (this.currentPage > this.totalOfPages) {
      this.currentPage = this.totalOfPages;
    }

    let data = this.data.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage);

    return data;
  }

  getShowedPages(): Array<number> {

    this.totalOfPages = Math.ceil(this.data.length / this.perPage);

    if (this.currentPage > this.totalOfPages) {
      this.currentPage = this.totalOfPages;
    }

    // 5 pages max
    let pages = [];
    let start = this.currentPage - 2;
    let end = this.currentPage + 2;

    if (start < 1) {
      start = 1;
      end = 5;
    }

    if (end > this.totalOfPages) {
      start = this.totalOfPages - 4;
      end = this.totalOfPages;
    }

    if (start < 1) {
      start = 1;
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  onClickNextPage() {
    if (this.currentPage < this.totalOfPages) {
      this.currentPage++;
    }
  }

  onClickPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}