import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload-service';
@Component({
  selector: 'app-nova-analise',
  templateUrl: './nova-analise.component.html',
  styleUrls: ['./nova-analise.component.css']
})
export class NovaAnaliseComponent {
  uploadedJson: any
  uploading = false
  fileName = '';
  constructor(private uploadService: UploadService,
    private router: Router
  ) { }

  onFileSelected(event: any) {
    const file = event.target.files[0]

    if (file) {
      this.fileName = file.name;
      const reader = new FileReader()
      reader.readAsText(file)

      reader.onload = () => {
        this.uploadedJson = JSON.parse(reader.result as string)
      }
    }
  }

  async uploadJson() {
    try {
      this.uploading = true
      const response: any = await this.uploadService.uploadJson(this.uploadedJson)
      this.router.navigate(['/resultado-analise', response.id])
    } catch (error) {
    } finally {
      this.uploading = false
    }
  }
}
