$products = @("wintv10", "wintv12", "hauppaugecapture", "troubleshooting")

foreach ($product in $products) {
    $mdPath = "src\content\docs\$product"
    if (Test-Path $mdPath) {
        Get-ChildItem -Path $mdPath -Filter "*.md" -Recurse | ForEach-Object {
            $content = Get-Content -LiteralPath $_.FullName -Raw
            $updated = $content -replace '\(/images/', '(/hcwdocs/images/'
            Set-Content -LiteralPath $_.FullName -Value $updated
        }
        Write-Host "Updated image paths in: $product"
    }
}